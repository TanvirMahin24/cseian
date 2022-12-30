-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2022 at 07:25 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sacdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `job_posts`
--

CREATE TABLE `job_posts` (
  `job_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `company_name` varchar(300) NOT NULL,
  `location` text NOT NULL,
  `date` date NOT NULL,
  `deadline` datetime NOT NULL,
  `duration_type` varchar(100) NOT NULL,
  `placement_type` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `applicationlink` text DEFAULT NULL,
  `post_woner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job_posts`
--

INSERT INTO `job_posts` (`job_id`, `title`, `company_name`, `location`, `date`, `deadline`, `duration_type`, `placement_type`, `description`, `applicationlink`, `post_woner`) VALUES
(2, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(3, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(4, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(5, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(6, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(7, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(8, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(9, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(10, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(11, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(12, 'tanvir\'s job', 'tanvir', 'habijabi', '2022-12-30', '2019-01-21 00:00:00', 'partTime', 'remote', NULL, NULL, 1803034),
(13, 'habijabi', 'Q', 'Rangpur, BD', '2022-12-30', '2023-01-06 03:02:00', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(14, 'habijabi', 'fagwr', 'sdfawe', '2022-12-30', '2017-12-12 00:00:00', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(15, 'babaji', 'fagwr', 'sdfawe', '2022-12-30', '2017-12-12 00:00:00', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `job_posts`
--
ALTER TABLE `job_posts`
  ADD PRIMARY KEY (`job_id`),
  ADD KEY `post_woner` (`post_woner`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `job_posts`
--
ALTER TABLE `job_posts`
  ADD CONSTRAINT `job_posts_ibfk_1` FOREIGN KEY (`post_woner`) REFERENCES `member` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
