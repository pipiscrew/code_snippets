//http://stackoverflow.com/a/24867926
<input type="checkbox" data-size="large" />

//More importantly, a large control doesn't actually do that much to change the allowable size. You'll have to override the control width like this:

<style>
.bootstrap-switch-large{
    width: 200px;
}
</style>