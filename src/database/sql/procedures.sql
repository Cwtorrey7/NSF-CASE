-- -- Add new users for the platform procedure
-- delimiter //
-- create procedure registerUser(userId VARCHAR(255), pass varchar(256))
--     begin
--         insert into Users(userId, pass) values(userId, sha2(pass, 256));
--     end//
-- delimiter ;

-- -- Start a new session for a Google user
-- delimiter //
-- create procedure startGoogleSession(userId varchar(20), startedAt DATETIME, expiresAt DATETIME)
--     begin
--         insert into Sessions(userId, startedAt, expiresAt) values(userId, startedAt, expiresAt);
--     end//
-- delimiter ;

-- -- End session for a user
-- delimiter //
-- create procedure termSession(currId varchar(20))
--     begin
--         DELETE FROM Sessions WHERE userId=currId;
--     end//
-- delimiter ;