-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 24, 2015 at 07:02 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `FirstName` text NOT NULL,
  `LastName` text NOT NULL,
  `UserID` text NOT NULL,
  `Password` text NOT NULL,
  `Email` text NOT NULL,
  `PID` int(1) NOT NULL,
  `Color` text NOT NULL,
  `City` text NOT NULL,
  `FirstTime` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`FirstName`, `LastName`, `UserID`, `Password`, `Email`, `PID`, `Color`, `City`, `FirstTime`) VALUES
('S', 'L', 'a', 'p', 'a', 0, '', '', 0),
('s', 'p', 'a', 'a', 'a', 0, '', '', 0),
('s', 'p', 'a', 'a', 'a', 0, '', '', 0),
('s', 'p', 'a', 'a', 'a', 0, '', '', 0),
('asdf', 'asdf', 'asdfjkll', 'asdfjkll', 'asdf@gmail.com"', 0, '', '', 0),
('asdf', 'asdf', 'lasdfjkll', 'asdfjkll', 'asdf@gmail.com', 0, '', '', 0),
('asdf', 'asdf', 'asdfjkllll', 'asdfjkll', 'asdf@gmail.com', 0, '', '', 0),
('asdf', 'asdf', 'asdfasdf', 'asdfjkll', 'asdfjkl@gmail.com', 0, '', '', 0),
('asdf', 'asdf', 'asdffdas', 'asdfjkll', 'asdfjkl@gmail.com', 0, '', '', 0),
('asdf', 'asdf', 'asdfyuio', 'asdfjkll', 'asdf@gmail.com', 0, '', '', 0),
('asdf', 'asdf', 'asdfyuioo', 'asdfjkll', 'asdf@gmail.com', 0, '', '', 0),
('asdf', 'asdf', 'asdftyui', 'asdfjkll', 'asdfjkl@gmail.com', 0, '', '', 0),
('asdf', 'asdf', 'asdfasdfff', 'asdfjkll', 'asdf@gmail.com', 0, 'purple', '2388929', 0),
('asdf', 'asdf', 'asdlfkjasldkjf', 'asdfjkll', 'asdf@gmail.com', 0, 'purple', '2388929', 0),
('asdf', 'asdf', 'asldkfjlasdkjf', 'asdfjkll', 'asdf@gmail.com', 0, 'yellow', '2487956', 0),
('asdf', 'asdf', 'asdfjklasdfk', 'asdfjkll', 'asdfjklll@gmail.com', 0, 'yellow', '2471217', 0),
('asdf', 'asfd', 'asdfjkl;adsf', 'asdfjkll', 'asdfjkll@gmail.com', 0, 'yellow', '2459115', 0),
('asdf', 'asfd', 'asdfjkla', 'asdfjkll', 'asdfjkll@gmail.com', 0, 'yellow', '2459115', 0),
('pasdf', 'asdf', 'asdfjkli', 'asdfjkll', 'asdf@gmail.com', 0, 'yellow', '2459115', 0),
('asdf', 'asdf', 'sagrsccr', 'password', 'asdf@gmail.com', 0, 'purple', '2487956', 0),
('asdf', 'asdf', 'sagrsccrr', 'password', 'asdf@gmail.com', 0, 'purple', '2388929', 0),
('asdf', 'asdf', 'sagrsccrrr', 'password', 'asdf@gmail.com', 0, 'yellow', '2459115', 0),
('asdf', 'asdf', 'ldapasdf', 'asdfjkll', 'asdf@gmail.com', 0, 'purple', '2388929', 0),
('asdf', 'asdf', 'ldapasdfa', 'password', 'asdf@gmail.com', 0, 'purple', '2379574', 0),
('asdf', 'asdf', 'jdkskdkfjak', 'asdfjkll', 'asdf@gmail.com', 0, 'purple', '2379574', 0),
('asdf', 'asdf', 'jdkskdkfjaka', 'asdfjkll', 'asdf@gmail.com', 0, 'purple', '2357024', 0),
('asdf', 'asdf', 'asdlkfjlskdjf', 'asdfjkll', 'asdfasdf@gmail.com', 0, 'red', '2357024', 0),
('sagar', 'asdf', 'sagarlaud', 'password', 'sagar@email.com', 0, 'blue', '12590119', 0),
('testing', 'testing', 'testinguser', 'password', 'asdf@gmail.com', 0, 'yellow', '2388929', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
