-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2023 at 06:38 AM
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
-- Table structure for table `brunch`
--

CREATE TABLE `brunch` (
  `brunch_id` int(11) NOT NULL,
  `brunch_name` varchar(100) DEFAULT NULL,
  `brunch_recrutement_process` text DEFAULT NULL,
  `brunch_facilities` text DEFAULT NULL,
  `brunch_address` text DEFAULT NULL,
  `institute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brunch`
--

INSERT INTO `brunch` (`brunch_id`, `brunch_name`, `brunch_recrutement_process`, `brunch_facilities`, `brunch_address`, `institute_id`) VALUES
(1, 'poland', NULL, NULL, NULL, 15),
(18, 'Gulsan , Dhaka', NULL, NULL, NULL, 14),
(19, 'Dhaka, Bangladesh', NULL, NULL, NULL, 15);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `comment_description` text NOT NULL,
  `comment_woner_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`comment_id`, `post_id`, `comment_description`, `comment_woner_id`) VALUES
(2, 77, 'agwwrga', 1803034),
(4, 77, 'agwwrga', 1803034);

-- --------------------------------------------------------

--
-- Table structure for table `event_details`
--

CREATE TABLE `event_details` (
  `event_id` int(11) NOT NULL,
  `event_name` text NOT NULL,
  `event_description` text NOT NULL,
  `event_date` datetime NOT NULL,
  `registration_deadline` datetime NOT NULL,
  `event_venue` text NOT NULL,
  `event_picture` text NOT NULL,
  `status` int(11) NOT NULL COMMENT '0->internal\r\n1-> public\r\n2->alumni\r\n...'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_details`
--

INSERT INTO `event_details` (`event_id`, `event_name`, `event_description`, `event_date`, `registration_deadline`, `event_venue`, `event_picture`, `status`) VALUES
(1, 'Alumni Registration', 'asdf', '2023-04-04 00:00:00', '2023-03-12 00:00:00', 'asdf', 'asdf', 0),
(2, 'AlumniSFaW Registration', 'asdfERFwetgW', '2023-04-04 00:00:00', '2023-04-01 00:00:00', 'asdf', 'asdf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `question_id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `question_woner` int(11) NOT NULL,
  `answer` text DEFAULT NULL,
  `replyer_id` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`question_id`, `question`, `question_woner`, `answer`, `replyer_id`, `status`) VALUES
(3, 'awrgqwrgqwwgfwr', 1803015, NULL, NULL, 0),
(4, 'awrgqwrgqwwgfwrfqwrfqwer', 1803015, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `flags`
--

CREATE TABLE `flags` (
  `id` int(11) NOT NULL,
  `flag_name` varchar(100) NOT NULL,
  `flag_value` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flags`
--

INSERT INTO `flags` (`id`, `flag_name`, `flag_value`, `description`) VALUES
(1, 'last graduated series', 2016, '');

-- --------------------------------------------------------

--
-- Table structure for table `institute`
--

CREATE TABLE `institute` (
  `institute_id` int(11) NOT NULL,
  `institute_name` varchar(100) DEFAULT NULL,
  `recrutement_process` text DEFAULT NULL,
  `facilities` text DEFAULT NULL,
  `institute_address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institute`
--

INSERT INTO `institute` (`institute_id`, `institute_name`, `recrutement_process`, `facilities`, `institute_address`) VALUES
(14, 'Enosis Solution', NULL, NULL, NULL),
(15, 'BUET', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jobhistory`
--

CREATE TABLE `jobhistory` (
  `job_id` int(11) NOT NULL,
  `job_field` text DEFAULT NULL,
  `job_title` varchar(150) NOT NULL,
  `job_organization_id` int(11) NOT NULL,
  `job_organization_brunch_id` int(11) NOT NULL,
  `alumni_student_id` int(11) NOT NULL,
  `job_status` int(11) NOT NULL COMMENT '0--> left job\r\n1--> current job'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobhistory`
--

INSERT INTO `jobhistory` (`job_id`, `job_field`, `job_title`, `job_organization_id`, `job_organization_brunch_id`, `alumni_student_id`, `job_status`) VALUES
(1, 'Software Engineering', 'Software Engineer', 14, 18, 1803034, 1),
(38, 'Software Engineering', 'Software Engineer', 14, 18, 1603035, 1),
(39, 'Software Engineering', 'Software Engineer', 14, 18, 1603036, 1),
(40, 'Software Engineering', 'Software Engineer', 14, 18, 1603036, 1),
(41, 'Software Engineering', 'Software Engineer', 14, 18, 1603037, 1),
(42, 'Software Engineering', 'Software Engineer', 14, 18, 1603037, 1),
(43, 'Software Engineering', 'Software Engineer', 14, 18, 1603037, 1),
(44, 'Software Engineering', 'Software Engineer', 14, 18, 1603037, 1),
(45, 'Software Engineering', 'Software Engineer', 14, 18, 1803015, 0),
(46, 'Software Engineering', 'Software Engineer', 14, 18, 1803015, 1),
(47, 'Software Engineering', 'Software Engineer', 14, 18, 1803015, 1),
(48, 'Software Engineering', 'Software Engineer', 14, 18, 1803015, 1),
(49, 'Software Engineering', 'Software Engineer', 14, 18, 1803015, 1),
(50, 'Academic', 'Lecterure', 15, 19, 1803015, 1);

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
(15, 'babaji', 'fagwr', 'sdfawe', '2022-12-30', '2017-12-12 00:00:00', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(16, 'babaji', 'fagwr', 'sdfawe', '2023-01-30', '2019-02-24 20:31:33', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(17, 'babaji', 'fagwr', 'sdfawe', '2023-01-30', '2019-02-24 20:31:33', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(18, 'babaji', 'fagwr', 'sdfawe', '2023-01-30', '2019-02-24 20:31:33', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(19, 'babaji', 'fagwr', 'sdfawe', '2023-01-30', '2023-02-24 20:31:33', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(20, 'babaji', 'fagwr', 'sdfawe', '2023-01-30', '2023-01-24 20:31:33', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(21, 'babaji', 'fagwr', 'sdfawe', '2023-01-30', '2023-01-31 20:31:33', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(22, 'babaji', 'fagwr', 'sdfawe', '2023-01-30', '2023-01-31 20:31:33', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(23, 'babaji', 'fagwr', 'sdfawe', '2023-01-30', '2023-01-31 20:31:33', 'asegaer', 'Remote', 'dsajklhdl hsal', 'dasdas', 1803034),
(24, 'cghkhgfhu', 'hjhj', 'gfu', '2023-03-03', '2023-03-22 17:42:00', 'Full time', 'Office', '8e6to7td97of9f596', 'jfytrf7i', 1803034),
(25, 'fgagdfg', 'arsgwr', 'sagr', '2023-03-17', '2023-03-23 12:39:00', 'Full time', 'Office', 'wETTWRGw', 'watager', 1803015);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `student_id` int(11) NOT NULL,
  `series` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `picture` text DEFAULT NULL,
  `document` text NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` text DEFAULT NULL,
  `linkedin` varchar(150) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `contact_no` varchar(15) DEFAULT NULL,
  `available_time_to_contact` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `user_role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`student_id`, `series`, `name`, `picture`, `document`, `country`, `city`, `linkedin`, `email`, `contact_no`, `available_time_to_contact`, `password`, `user_role_id`) VALUES
(1603035, 16, 'Barik AhmedSadik', 'http://localhost:8080/resource/images?imageName=memberImage1603037.jpg', '', 'Bangladesh', 'Rajshahi', '', 'bariksadikruetabc@gmail.com', '01797975508', '7 am to 11 pm', 'a15e61e2ffc8bf3d016999753f3fb83f19e0d52280e3b4be0baad538c4bb3e5d40125be2406779b9', NULL),
(1603036, 16, 'Dibbo Borua', 'http://localhost:8080/resource/images?imageName=memberImage1603037.jpg', '', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', '7cc244474d68a1b20d2ae138b145eb12c86757fa0151925ec32032832c846258e271ee91ddde8846', NULL),
(1603037, 16, 'Dibbo Borua', 'http://localhost:8080/resource/images?imageName=memberImage1603037.jpg', 'http://localhost:8080/resource/images?imageName=memberDocumentImage1603037.PNG', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', 'e56f86487f5722027c5ac62c7a9650d7e56fa83234ce27b853ab4a77f1783fee8df4c337bbb6e477', NULL),
(1803015, 18, ' Mohammad Barkatullah Shammo', 'http://localhost:8080/resource/images?imageName=memberImage1803015.PNG', 'http://localhost:8080/resource/images?imageName=memberDocumentImage1803015.PNG', 'Bangladesh', 'Rajshahi', '', 'abcshammo@gmail.com', '01797975508', '7 am to 11 pm', '8cdf080e6e938b555cd2e428811e30b7694ed0028dd620e97f118f08ca8b85248e0c4bf169e081e5', 5),
(1803034, 18, ' Nahid', 'http://localhost:8080/resource/images?imageName=memberImage1603037.jpg', '', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', '96501bc2e3aa1ceaf2a422edea65600ad5d6be4451766793f49df4901718b14d839422ceb312322b', 3),
(1803035, 18, 'Siam Ahmed', 'http://localhost:8080/resource/images?imageName=memberImage1603037.jpg', '', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', '9f9fa320503edc416d9fa61c6e56ba2ac256f3464c2bfdf076be9325dd823f69bd02b6deb53245b3', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `option_id` int(11) NOT NULL,
  `option_name` int(11) NOT NULL,
  `option_link` int(11) NOT NULL,
  `option_description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` int(11) NOT NULL,
  `post_title` text DEFAULT NULL,
  `post_description` text DEFAULT NULL,
  `post_atachment_link` text DEFAULT NULL,
  `post_woner_id` int(11) DEFAULT NULL,
  `post_date` date DEFAULT NULL,
  `post_type` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `post_title`, `post_description`, `post_atachment_link`, `post_woner_id`, `post_date`, `post_type`) VALUES
(76, NULL, 'aefuawgeiufgcqpwiuegfip', 'http://localhost:8080/resource/images?imageName=postImage76.PNG', 1803034, '2023-03-03', 0),
(77, NULL, 'aefuawgeiufgcqpwiuegfip', NULL, 1803034, '2023-03-03', 0),
(79, 'Mahin', 'nahiddaa', 'http://localhost:8080/resource/images?imageName=postImage79.PNG', 1803034, '2023-03-03', 0);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`, `role_description`) VALUES
(1, 'Pending_Application', 'Pending_Application'),
(2, 'Banned_Member', 'Banned_Member'),
(3, 'STUDENT', 'current Student'),
(4, 'FACULTY', 'Faculty at RUET CSE'),
(5, 'ADMIN', 'adminstrator'),
(6, 'Alumni', 'Alumni');

-- --------------------------------------------------------

--
-- Table structure for table `table_registry`
--

CREATE TABLE `table_registry` (
  `table_id` int(11) NOT NULL,
  `table_name` varchar(30) NOT NULL,
  `registry_key` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_registry`
--

INSERT INTO `table_registry` (`table_id`, `table_name`, `registry_key`) VALUES
(1, 'brunch', 19),
(2, 'faq', 4),
(3, 'institute', 15),
(4, 'jobhistory', 50),
(5, 'post', 80),
(6, 'comment', 5),
(7, 'job_posts', 25),
(8, 'event_details', 2);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` varchar(100) NOT NULL,
  `transaction_creator` int(11) NOT NULL,
  `reciepent_bank_account_no` varchar(100) NOT NULL,
  `bank_name` text NOT NULL,
  `bank_receipt` text NOT NULL,
  `event_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `validity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transaction_id`, `transaction_creator`, `reciepent_bank_account_no`, `bank_name`, `bank_receipt`, `event_id`, `status`, `validity`) VALUES
('', 1803015, '', '', 'http://localhost:8080/resource/images?imageName=bankRecieptImage.', 1, 1, 0),
('AEFQEWF', 1803015, 'Fwewee', 'fwaeawefw', 'http://localhost:8080/resource/images?imageName=bankRecieptImageAEFQEWF.PNG', 1, 1, 0),
('sergwerthasfgwe', 1603035, 'ergwergqe', 'ergqergqer', 'http://localhost:8080/resource/images?imageName=bankRecieptImagesergwerthgwe.', 2, 1, 1),
('sergwerthgwe', 1803015, 'ergwergqe', 'ergqergqer', 'http://localhost:8080/resource/images?imageName=bankRecieptImagesergwerthgwe.', 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `varfication_codes`
--

CREATE TABLE `varfication_codes` (
  `id` int(11) NOT NULL,
  `code` varchar(6) NOT NULL,
  `user_id` int(11) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `varfication_codes`
--

INSERT INTO `varfication_codes` (`id`, `code`, `user_id`, `time`) VALUES
(64, 'RkXstq', 1803015, '2023-03-08 17:00:18'),
(65, 'uSZC1e', 1803015, '2023-03-08 17:03:01'),
(66, 'qiIXsg', 1803015, '2023-03-08 17:03:59'),
(68, 'BMYPYK', 1803015, '2023-03-08 17:39:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brunch`
--
ALTER TABLE `brunch`
  ADD PRIMARY KEY (`brunch_id`),
  ADD KEY `institute_id` (`institute_id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `comment_woner_id` (`comment_woner_id`);

--
-- Indexes for table `event_details`
--
ALTER TABLE `event_details`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `replyer_id` (`replyer_id`),
  ADD KEY `question_woner` (`question_woner`);

--
-- Indexes for table `flags`
--
ALTER TABLE `flags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `institute`
--
ALTER TABLE `institute`
  ADD PRIMARY KEY (`institute_id`);

--
-- Indexes for table `jobhistory`
--
ALTER TABLE `jobhistory`
  ADD PRIMARY KEY (`job_id`),
  ADD KEY `job_organization_id` (`job_organization_id`),
  ADD KEY `job_organization_brunch_id` (`job_organization_brunch_id`),
  ADD KEY `alumni_student_id` (`alumni_student_id`);

--
-- Indexes for table `job_posts`
--
ALTER TABLE `job_posts`
  ADD PRIMARY KEY (`job_id`),
  ADD KEY `post_woner` (`post_woner`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `user_role_id` (`user_role_id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`option_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_woner_id` (`post_woner_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `table_registry`
--
ALTER TABLE `table_registry`
  ADD PRIMARY KEY (`table_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `transaction_creator` (`transaction_creator`);

--
-- Indexes for table `varfication_codes`
--
ALTER TABLE `varfication_codes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `varfication_codes`
--
ALTER TABLE `varfication_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brunch`
--
ALTER TABLE `brunch`
  ADD CONSTRAINT `brunch_ibfk_1` FOREIGN KEY (`institute_id`) REFERENCES `institute` (`institute_id`);

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`comment_woner_id`) REFERENCES `member` (`student_id`);

--
-- Constraints for table `faq`
--
ALTER TABLE `faq`
  ADD CONSTRAINT `faq_ibfk_1` FOREIGN KEY (`replyer_id`) REFERENCES `member` (`student_id`),
  ADD CONSTRAINT `faq_ibfk_2` FOREIGN KEY (`question_woner`) REFERENCES `member` (`student_id`);

--
-- Constraints for table `jobhistory`
--
ALTER TABLE `jobhistory`
  ADD CONSTRAINT `jobhistory_ibfk_1` FOREIGN KEY (`job_organization_id`) REFERENCES `institute` (`institute_id`),
  ADD CONSTRAINT `jobhistory_ibfk_2` FOREIGN KEY (`job_organization_brunch_id`) REFERENCES `brunch` (`brunch_id`),
  ADD CONSTRAINT `jobhistory_ibfk_3` FOREIGN KEY (`alumni_student_id`) REFERENCES `member` (`student_id`);

--
-- Constraints for table `job_posts`
--
ALTER TABLE `job_posts`
  ADD CONSTRAINT `job_posts_ibfk_1` FOREIGN KEY (`post_woner`) REFERENCES `member` (`student_id`);

--
-- Constraints for table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`user_role_id`) REFERENCES `roles` (`role_id`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`post_woner_id`) REFERENCES `member` (`student_id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event_details` (`event_id`),
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`transaction_creator`) REFERENCES `member` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
