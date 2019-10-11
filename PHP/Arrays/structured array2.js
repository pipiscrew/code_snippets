<?php

class balancerec {
	public $income;
	public $expense;
	public $month_no;
}

$ListOfBalanceRECS = array(balancerec);

$rec_balance=null;

$rec_balance = new balancerec();

$rec_balance->income = 88;
$rec_balance->expense = 77;

$ListOfBalanceRECS[] = $rec_balance;


$ListOfBalanceRECS[1]->income = "kalatrava";

var_dump($ListOfBalanceRECS[1]);
?>
