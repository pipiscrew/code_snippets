//https://stackoverflow.com/a/10999467

INSERT INTO MyTable(Name, Address, PhoneNo)
OUTPUT INSERTED.ID
VALUES ('Yatrix', '1234 Address Stuff', '1112223333')
