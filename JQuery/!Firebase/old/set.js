//onyl for add new 
//removes .priority
        nameRef = new Firebase('https://csp.firebaseio.com/events/' + event + "/info");

        nameRef.set({
            title : evenName,
            summary : descr
        });