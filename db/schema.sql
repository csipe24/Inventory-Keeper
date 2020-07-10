-- Drops the inventory if it exists currently --
DROP DATABASE IF EXISTS inventory;
-- Creates the "inventory" database --
CREATE DATABASE inventory;
INSERT INTO `inventory`.`categories` (`category`, `createdAt`, `updatedAt`) VALUES ('literature', '2020-09-09', '2020-09-09');
INSERT INTO `inventory`.`items` (`item`, `quantity`, `cost`, `createdAt`, `updatedAt`, `CategoryId`) VALUES ('Book', '10', '10', '2020-10-11', '2020-10-11', '1');
