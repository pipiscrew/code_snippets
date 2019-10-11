//https://rietta.com/blog/2012/03/03/best-data-types-for-currencymoney-in/

SELECT
  ROUND(SUM(amount), 2) AS total_amount
FROM orders
WHERE created_at > '2012-01-01'