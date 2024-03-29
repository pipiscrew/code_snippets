<div class="chart"></div>

<ul class="key">
  <li>
    <strong class="percent red">4%</strong>
    <span class="choice">Jump right in, startupfille here I come.</span>
  </li>
  <li>
    <strong class="percent gray">4%</strong>
    <span class="choice">Email back to discuss, flattered and positive.</span>
  </li>
  <li>
    <strong class="percent purple">6%</strong>
    <span class="choice">Respond and say "Thanks but no thanks."</span>
  </li>
  <li>
    <strong class="percent blue">9%</strong>
    <span class="choice">Email back to discuss, all business.</span>
  </li>
  <li>
    <strong class="percent yellow">31%</strong>
    <span class="choice">Email back to discuss, but skeptically.</span>
  </li>
  <li>
    <strong class="percent orange">46%</strong>
    <span class="choice">Delete the email.</span>
  </li>
</ul>


<style>
$red = #F15854;
$gray = #4D4D4D;
$blue = #5DA5DA;
$yellow = #DECF3F;
$purple = #B276B2;
$orange = #FAA43A;
// colors from http://www.mulinblog.com/a-color-palette-optimized-for-data-visualization/

.chart {
  background: 
    conic-gradient($red 4%, 
      $gray 0 8%, 
      $blue 0 17%,
      $yellow 0 48%,
      $purple 0 54%,
      $orange 0
    );
  border-radius: 50%;
  width: 50%;
  height: 0;
  padding-top: 50%;
  float: left;
  padding-right: 20px;
}

.key {
  width: 50%;
  float: right;
  list-style: none;
  display: table;
  border-collapse: separate;
  > li {
    display: table-row;
    > * {
      display: table-cell;
      border-bottom: 12px solid white;
    }
  }
}

.percent {
  color: white;
  padding: 10px 2px;
  text-shadow: 0 0 1px black;
  text-align: center;
}
.choice {
  padding-left: 10px;
}

.red {
  background: $red;
}
.gray {
  background: $gray;
}
.blue {
  background: $blue;
}
.yellow {
  background: $yellow;
}
.purple {
  background: $purple;
}
.orange {
  background: $orange;
}

* {
  box-sizing: border-box;
}

body {
  padding: 20px;
  font-family: sans-serif;
}
</style>


/*
   Uses
   -prefix-free (required)
   http://leaverou.github.io/conic-gradient/
*/