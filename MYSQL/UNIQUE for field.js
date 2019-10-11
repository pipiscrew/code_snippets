//the field email already exists to table
ALTER TABLE user ADD UNIQUE (email)

ALTER TABLE vouchers ADD UNIQUE (voucher_no)