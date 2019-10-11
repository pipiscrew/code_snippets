//http://stackoverflow.com/questions/11585151/firebase-field-delayed-update

//http://www.unknownerror.org/Problem/index/-1534562028/chaining-serialized-deferred-for-posting-data/

	// sends a callback to fx where the results can be stored
	function defer( fx ) {
	   return function() {
	      var deferred = $.Deferred();
	      fx( function(snapshot) { deferred.resolve(snapshot.val(); } );
	      return deferred.promise();
	   }
	}
	
	$.when( // wait for both actions to complete
	   defer( function(callback) { userRef.once('value', callback)   }),
	   defer( function(callback) { widgetRef.once('value', callback) })
	).then( function(values) {   
	   // both deferreds are done now
	   // and values contains an array with the snapshot.val() from each call
	   console.log(values);
	});
	
	
//https://gist.github.com/katowulf/5006634
/*! firebase.js
 *************************************/
(function ($) {
   "use strict";
   var undefined;
   var FIREBASE_URL = 'https://YOURINSTANCE.firebaseio.com';
 
   // when true, all Firebase ops are logged to the JavaScript console
   // some critical errors and warnings are always logged, even if this is false
   var DEVMODE = true;
 
   // google analytics events (fired on set/update/remove operations)
   if( typeof(_gaq) === 'undefined' ) { var _gaq = null; }
 
   // create a dummy console object for dummy IE
   if( typeof(console) === 'undefined' ) {
      var f = function(){};
      var console = { log: f, info: f, warn: f, error: f };
   }
 
   var FB = $.ws.FB = {
 
      /**
       * Authenticate against Firebase using the token provided
       * @param {String} token
       * @return {jQuery.Deferred} resolves to the token if successfully authenticated
       */
      'auth': function(token) {
         DEVMODE && console.log('FB.auth', token);
         return $.Deferred(function(def) {
            var to = setTimeout(function() {
               def.reject('timeout');
               to = null;
            }, 10000);
            FB.root.auth(token, function(error, dummy) {
               to && clearTimeout(to);
               _gaq && _gaq.push(['_trackEvent', 'firebase', 'auth', error]);
               if(error) {
                  console.warn('fb token failed');
                  def.reject();
               } else {
                  DEVMODE && console.log('FB.auth resolved', token);
                  def.resolve(token);
               }
            })
         });
      },
 
      /**
       * Calls Firebase.once() on the path. The promise is fulfilled with the returned value.
       * If the operation fails, then the promise will be rejected.
       * If a `context` is provided, then all callbacks will have `this` set to `context`
       *
       * @param {Array|String|Object} path passed into $.ws.FB.connect() method
       * @param {String} event
       * @param {Object} [context]
       * @return {jQuery.Deferred} resolves with three arguments: value (snapshot.val()), key (snapshot.name()), snapshot
       */
      'once': function(path, event, context) {
         return $.Deferred(function(def) {
            FB.connect(path).once(event, function(ss) {
               DEVMODE && console.log('FB.once...', event, ss.name());
               def.resolveWith(context||null, [ss.val(), ss.name(), ss]);
            }, function() {
               console.error('Access denied attempting to read database', path, event);
               def.rejectWith(context||null, ['Access denied when attempting to read database']);
            });
         });
      },
 
      /**
       * Monitors a Firebase path using a promise contract.
       *
       * <pre>
       *     FB.on('users', 'child_added')
       *       .progress( childAdded )
       *       .fail( securityError )
       *       .done( listenerDisposed )
       * </pre>
       *
       * The progress() method is invoked any time the requested event(s) occur.
       * If the path becomes inaccessible at any time (due to security) then the reject() method is fired.
       *
       * The progress callback receives four arguments: progressCallback( value, name, snapshot, event )
       * They are arranged to work with underscores iterators and for convenience. They are derived from:
       *     value: snapshot.val()
       *     name: snapshot.name()
       *     snapshot: direct reference to the Firebase snapshot
       *     event: the string passed to `on` originally (in case you use one handler for multiple events)
       *
       * Instead of maintaining a reference to the function and later calling Firebase.off, you may
       * simply invoke the custom `dispose` method on the promise, which will clean up all connections.
       * When dispose is called, the promise is immediately fulfilled, so this can be used as an event listener as well.
       *
       * @param {Array|String|Object} path passed into $.ws.FB.connect() method
       * @param {String} event
       * @param {Object} [context]
       * @return {jQuery.Deferred}
       */
      'on': function(path, event, context) {
         var def = $.Deferred();
         var ref = FB.connect(path);
         DEVMODE && console.log('FB.on', event, FB.path(path));
 
         function callback(snap) {
            def.notifyWith(context||null, [snap.val(), snap.name(), snap, event]);
         }
 
         ref.on(event, callback, def.reject);
         return _.extend(def.promise(), {
            dispose: function() {
               ref.off(event, callback);
               def.resolveWith(context||null, [event]);
            }
         })
      },
 
      /**
       * Performs a Firebase.update() operation; can also set a priority during the update (a relic of a bug
       * where update() resets the priority to null and there is no way to use a '.priority' key during update)
       *
       * @param {Array|String|Object} path   passed into $.ws.FB.connect() method
       * @param {Object} children   the object containing child values to be updated
       * @param {number} priority   the new priority of the parent object
       * @return {jQuery.Deferred} resolves to the Firebase reference
       */
      'update': function(path, children, priority) {
         DEVMODE && console.log('FB.update', path, children);
         _gaq && _gaq.push(['_trackEvent', 'firebase', 'update', path]);
         return $.Deferred(function(def) {
            var ref = FB.connect(path);
            ref.update(children, handleError(def, path));
            if( priority !== undefined ) {
               ref.setPriority(priority);
            }
         });
      },
 
      /**
       * Calls Firebase.set or optionally Firebase.setWithPriority.
       *
       * @param {Array|String|Object} path passed into $.ws.FB.connect() method
       * @param value
       * @param {string|number} priority
       * @return {jQuery.Deferred} resolves to the Firebase reference
       */
      'set': function(path, value, priority) {
         DEVMODE && console.log('FB.set', FB.path(path), JSON.stringify(value), priority);
         return $.Deferred(function(def) {
            var ref = FB.connect(path);
            _gaq && _gaq.push(['_trackEvent', 'firebase', 'set', FB.path(path)]);
            if( priority !== undefined ) {
               ref.setWithPriority(value, priority, handleError(def, ref));
            }
            else {
               ref.set(value, handleError(def, ref));
            }
         });
      },
 
      /**
       * Return the value for a path as an object.
       *
       * @param {Array|String} path
       * @returns {jQuery.Deferred} resolves to the value
       */
      'get': function(path) {
         return FB.once(path, 'value');
      },
 
      /**
       * Increase or decrease a numerical value. This uses a transaction to ensure concurrent edits do not muck
       * the count.
       *
       * Opts can contain:
       *    {number} min  the minimum range for the value
       *    {number} max  the maximum range for the value
       *             pri  sort priority to apply after setting (for sorted lists of primitive values)
       *
       * @param path
       * @param {number} change the amount to increase or decrease
       * @param {object|number} [opts]  either a minimum value or an opts object (see above)
       * @return {*}
       */
      'adjust': function(path, change, opts) {
         if( change !== 0 ) {
            opts = _.extend({}, _.isNumber(opts)? {min: opts} : opts);
            _gaq && _gaq.push(['_trackEvent', 'firebase', 'adjust', FB.path(path)]);
            return $.Deferred(function(def) {
               FB.connect(path).transaction(
                  function(current) {
                     var newVal = _.isNumber(current)? current + change : change;
                     if(_.isNumber(opts.min)) {
                        newVal = Math.max(opts.min, newVal);
                     }
                     if(_.isNumber(opts.max)) {
                        newVal = Math.min(opts.max, newVal);
                     }
                     return _.has(opts, 'pri')? {".value": newVal, ".priority": opts.pri} : newVal;
                  },
                  function(error, committed, snapshot, dummy) {
                     if (error) {
                        _gaq && _gaq.push(['_trackEvent', 'firebase', 'error', '('+FB.path(path)+')'+error]);
                        console.error('DB error', error, {change: change, path: path, opts: opts});
                        def.reject(error);
                     }
                     else if (committed) {
                        def.resolve(snapshot.val(), snapshot.name(), snapshot, 'value');
                     }
                     else {
                        console.error('Failed to adjust value', {change: change, path: path, opts: opts});
                        def.reject();
                     }
                  });
            });
         }
         else {
            return FB.once(path, 'value');
         }
      },
 
      /**
       * Remove a record permanently from the database
       * @param {Array|String|Object} path passed into $.ws.FB.connect() method
       * @return {jQuery.Deferred} this does not reject, it returns a boolean indicating whether the reject succeeded
       */
      'remove': function(path) {
          return $.Deferred(function(def) {
             FB.connect(path).remove(function(error, dummy) {
                _gaq && _gaq.push(['_trackEvent', 'firebase', 'remove', FB.path(path)]);
                if( error ) {
                   _gaq && _gaq.push(['_trackEvent', 'firebase', 'error', '('+FB.path(path)+')'+error]);
                   console.warn('Failed to remove record', path);
                }
                def.resolve(!error);
             });
          });
      },
 
      /**
       * @param {Array|String|Object} parentPath passed into $.ws.FB.connect() method
       * @param value
       * @param [priority]
       */
      'push': function(parentPath, value, priority) {
         DEVMODE && console.log('FB.set', FB.path(parentPath), JSON.stringify(value), priority);
         return $.Deferred(function(def) {
            var ref = FB.newChild(parentPath);
            _gaq && _gaq.push(['_trackEvent', 'firebase', 'set', FB.path(parentPath)]);
            if( priority !== undefined ) {
               ref.setWithPriority(value, priority, handleError(def, ref));
            }
            else {
               ref.set(value, handleError(def, ref));
            }
         });
      },
 
      /**
       * Set or remove a value when disconnected from Firebase
       *
       * @param {Array|String|Object} path passed into $.ws.FB.connect() method
       * @param currentValue the path is set to this until disconnect occurs
       * @param [disconnectState] the value to be stored, if not specified uses null (deletes value on disconnect)
       * @return {jQuery.Deferred} resolves instantly if no currentValue is provided, otherwise after currentValue is set
       */
      'state': function(path, currentValue, disconnectState) {
         var def;
         var ref = FB.connect(path);
         if( disconnectState === undefined ) { disconnectState = null; }
         ref.onDisconnect().set(disconnectState);
         if( currentValue ) {
            def = FB.set(path, currentValue);
         }
         else {
            def = $.Deferred().resolve(ref);
         }
         return def;
      },
 
      /**
       * Creates a reference to a Firebase path. You won't generally call this directly, as it's called internally
       * by set/on/once/update/et al
       *
       * The `path` argument is sent to path(); see that method for complete details. Generally this is a string
       * relative to the root Firebase path or an array containing components of the path to be merged.
       *
       * `options` may contain:
       *    startAt: start priority for matching results
       *    endAt:   end priority for matching results
       *    limit:   maximum number of records to put into the list
       *
       * The `path` and `options` may also be passed as a single object containing those two keys.
       *
       * @param {Array|String|Object} path passed into $.ws.FB.path() method
       * @param {Object} [options]
       * @return {Firebase}
       */
      'connect': function(path, options) {
         if(arguments.length === 1 && $.isPlainObject(path)) {
            options = path.options||path.opts||{};
            path = path.path;
         }
         var ref = FB.root.child(FB.path(path));
         options && (ref = applyOptions(ref, options));
         DEVMODE && console.log('FB.connect', path, ref.name(), options);
         return ref;
      },
 
      /**
       * Create a reference to a new child path and return it for use. You would normally just call push() instead
       * of this method, although this could for utilitarian tasks like obtaining IDs (e.g. FB.newChild(path).name())
       *
       * @param {String|Array} parentPath
       * @return {Firebase} synchronous operation
       */
      'newChild': function(parentPath) {
         return FB.connect(parentPath).push();
      },
 
      /**
       * Removes an of `/.$[]#`, turning the untrusted string into a valid Firebase path.
       *
       * @param {String} key untrusted part of a path
       * @return {String}
       */
      'key': function(key) {
         // URLs used to construct Firebase references may contain any unicode characters except: . $ [ ] # /
         return (key||'').replace(/[\/.$[\]#]/, '');
      },
 
      /**
       * Returns a path url. When `parts` is a string, it is assumed to be a valid URL. When `parts` is an array, then
       * each element after index 0 is parsed by $.ws.FB.key(). So any of the following are valid calls:
       *
       * <pre><code>
       *    FB.path( 'users/mikey' )
       *    FB.path( ['users', $id] )
       *    FB.path( 'users', $id )
       *    FB.path( 'users', [$id, 'public'], 'first_name' )
       * </code></pre>
       *
       * @param {Array|String} a the base path; this is never cleaned (you can put any url up to the first variable in here)
       * @param {Array|String} [b] these are just to make the ide happy
       * @param {Array|String} [c]
       * @param {Array|String} [d]
       * @param {Array|String} [e]
       * @param {Array|String} [f]
       * @return {String}
       */
      'path': function(a, b, c, d, e, f) {
         var parts = _.flatten(arguments);
         var base = parts[0];
         // the first argument to 'connect' can be an object containing {path: ..., options: ...}
         // since we use path() for logging (pretty much interchangeable with connect()) just check for
         // that here; it's a bit coupled but it does the job
         if($.isPlainObject(base) && _.has(base, 'path')) {
            base = FB.path(base.path);
         }
         if( !parts || !parts.length || hasEmptyParts(parts) ) {
            throw new Error('Path was empty or contained an empty element; cannot set path to root');
         }
         return _.reduce(parts.slice(1), function(memo, v) {
            return memo + '/' + FB.key(v);
         }, base); // the base is not cleaned up
      },
 
      /**
       * Returns a path URL with the domain prefix, suitable for calling new Firebase(). Generally, you'll want to
       * just use FB.connect() instead of this.
       */
      'fullPath': function(parts) {
         return FIREBASE_URL+FB.path.apply(null, _.toArray(arguments));
      },
 
      // reference to the root firebase element; intended for internal use (that's what we have these nifty functions for!)
      'root': new Firebase(FIREBASE_URL)
 
   };
 
   function handleError(def, path) {
      var args = _.toArray(arguments).slice(2);
      return function(error, dummy) {
         if( error ) {
            _gaq && _gaq.push(['_trackEvent', 'firebase', 'error', '('+FB.path(path)+')'+error]);
            console.error('Failed to write record', error);
            def.reject('Failed to write record.', error);
         }
         else { def.resolve.apply(def, args); }
      };
   }
 
   function applyOptions(ref, options) {
      _.each(options, function(v,k) {
         switch(k) {
            case 'endAt':
            case 'startAt':
            case 'limit':
               ref[k](v);
               break;
            default:
               throw new Error('Invalid Firebase option: '+k);
         }
      });
      return ref;
   }
 
   function hasEmptyParts(parts) {
      var res = false;
      _.each(parts, function(p) {
         if(_.isEmpty(p)) { res = true; }
      });
      return res;
   }
 
})(jQuery);