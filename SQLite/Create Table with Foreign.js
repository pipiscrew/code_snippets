//http://www.sqlite.org/foreignkeys.html#fk_basics
CREATE TABLE Languages(
    TgUniqueField INTEGER PRIMARY KEY,
    IsEnabled INTEGER,
    Description TEXT,
    Picture BLOB
);

CREATE TABLE Categories(
    TgUniqueField INTEGER PRIMARY KEY,
    LanguageID INTEGER,
    Description TEXT,
    Picture BLOB,
    FOREIGN KEY(LanguageID) REFERENCES Languages(TgUniqueField) ON DELETE CASCADE
);

CREATE TABLE Products(
    TgUniqueField INTEGER PRIMARY KEY,
    CategoryID INTEGER,
    Description TEXT,
    Picture BLOB,
    FOREIGN KEY(CategoryID) REFERENCES Categories(TgUniqueField) ON DELETE CASCADE
);
