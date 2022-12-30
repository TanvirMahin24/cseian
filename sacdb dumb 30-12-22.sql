-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2022 at 02:17 PM
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
(18, 'Gulsan , Dhaka', NULL, NULL, NULL, 14);

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

-- --------------------------------------------------------

--
-- Table structure for table `event_details`
--

CREATE TABLE `event_details` (
  `event_id` int(11) NOT NULL,
  `event_name` text NOT NULL,
  `event_description` text NOT NULL,
  `event_date` date NOT NULL,
  `registration_deadline` date NOT NULL,
  `event_venue` text NOT NULL,
  `event_picture` text NOT NULL,
  `status` int(11) NOT NULL COMMENT '0->internal\r\n1-> public\r\n2->alumni\r\n...'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_details`
--

INSERT INTO `event_details` (`event_id`, `event_name`, `event_description`, `event_date`, `registration_deadline`, `event_venue`, `event_picture`, `status`) VALUES
(1, 'Alumni Registration', 'asdf', '3023-04-04', '3022-12-02', 'asdf', 'asdf', 0);

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
(15, 'Google', NULL, NULL, NULL);

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
(38, 'Software Engineering', 'Software Engineer', 14, 18, 1603035, 1),
(39, 'Software Engineering', 'Software Engineer', 14, 18, 1603036, 1),
(40, 'Software Engineering', 'Software Engineer', 14, 18, 1603036, 1),
(41, 'Software Engineering', 'Software Engineer', 14, 18, 1603037, 1),
(42, 'Software Engineering', 'Software Engineer', 14, 18, 1603037, 1),
(43, 'Software Engineering', 'Software Engineer', 14, 18, 1603037, 1),
(44, 'Software Engineering', 'Software Engineer', 14, 18, 1603037, 1);

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
  `deadline` date NOT NULL,
  `duration_type` varchar(100) NOT NULL,
  `placement_type` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `applicationlink` text NOT NULL,
  `post_woner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1603035, 16, 'Barik AhmedSadik', 'http://localhost:8080/resource/images?imageName=memberImage1603035.PNG', '', 'Bangladesh', 'Rajshahi', '', 'bariksadikruetabc@gmail.com', '01797975508', '7 am to 11 pm', 'a15e61e2ffc8bf3d016999753f3fb83f19e0d52280e3b4be0baad538c4bb3e5d40125be2406779b9', NULL),
(1603036, 16, 'Dibbo Borua', 'http://localhost:8080/resource/images?imageName=memberImage1603036.jpg', '', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', '7cc244474d68a1b20d2ae138b145eb12c86757fa0151925ec32032832c846258e271ee91ddde8846', NULL),
(1603037, 16, 'Dibbo Borua', 'http://localhost:8080/resource/images?imageName=memberImage1603037.jpg', 'http://localhost:8080/resource/images?imageName=memberDocumentImage1603037.PNG', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', 'e56f86487f5722027c5ac62c7a9650d7e56fa83234ce27b853ab4a77f1783fee8df4c337bbb6e477', NULL),
(1803034, 18, ' ', 'http://localhost:8080/resource/images?imageName=memberImage1803034.PNG', '', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', '96501bc2e3aa1ceaf2a422edea65600ad5d6be4451766793f49df4901718b14d839422ceb312322b', 1),
(1803035, 18, 'Siam Ahmed', 'http://localhost:8080/resource/images?imageName=memberImage1803035.PNG', '', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', '9f9fa320503edc416d9fa61c6e56ba2ac256f3464c2bfdf076be9325dd823f69bd02b6deb53245b3', NULL);

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
(3, 'STUDENT', ' current student'),
(4, 'FACULTY', 'Faculty at RUET CSE'),
(5, 'ADMIN', 'adminstrator');

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
(1, 'brunch', 18),
(2, 'faq', 1),
(3, 'institute', 14),
(4, 'jobhistory', 44),
(5, 'post', 75),
(6, 'comment', 1),
(7, 'job_posts', 1),
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
(23, '6TOXQQ', 1803034, '2022-12-02 13:36:04'),
(24, 'u2FUvb', 1803034, '2022-12-02 13:37:57'),
(27, '7rSpga', 1803035, '2022-12-02 13:55:30'),
(28, 'EPZeO7', 1803035, '2022-12-02 14:04:47'),
(29, '10LrWu', 1603035, '2022-12-03 17:06:54'),
(30, 'IEk4FP', 1603036, '2022-12-03 17:07:49'),
(31, 'MLtqpM', 1603036, '2022-12-14 16:28:11'),
(32, 'pYlclx', 1603036, '2022-12-14 16:39:02'),
(33, 'mUw7SP', 1603036, '2022-12-14 16:40:07'),
(34, 'qCqsN8', 1603036, '2022-12-14 16:51:33'),
(35, 'U6Yc15', 1603036, '2022-12-14 17:12:59'),
(36, '5Dhvmi', 1603036, '2022-12-14 17:13:36'),
(37, 'epxlFN', 1603036, '2022-12-14 17:15:55'),
(38, 'D63iXA', 1603036, '2022-12-14 19:06:40'),
(39, 'g0Sizy', 1603036, '2022-12-14 19:06:56'),
(40, 'jay4Ef', 1603036, '2022-12-14 19:07:14'),
(41, 'BSaR3F', 1603036, '2022-12-14 19:20:27'),
(42, 'DfSQ2D', 1603036, '2022-12-14 19:21:32'),
(43, 'CZ8RCR', 1603036, '2022-12-14 19:24:35'),
(44, 'PqsUbi', 1603036, '2022-12-14 19:32:48'),
(45, 'sYOtHB', 1603036, '2022-12-15 20:04:41'),
(46, 'B4xYY7', 1603036, '2022-12-15 20:12:46'),
(47, 'U2AECP', 1603036, '2022-12-15 20:14:26'),
(48, 'VWLn3G', 1603036, '2022-12-15 20:16:31'),
(49, '60hXEd', 1603036, '2022-12-15 20:17:48'),
(50, 'D5ZER7', 1603036, '2022-12-15 20:21:20'),
(51, 'MNInea', 1603036, '2022-12-15 20:23:27'),
(52, 'GSzUbi', 1603036, '2022-12-15 21:07:10'),
(53, 'nIpFpk', 1603036, '2022-12-15 21:11:41'),
(54, 'Pi5bvU', 1603037, '2022-12-15 22:59:12'),
(55, 'CT2QN0', 1603037, '2022-12-15 23:01:24'),
(56, '5Ayz6K', 1603037, '2022-12-15 23:08:32'),
(57, 'tvUwOp', 1603037, '2022-12-15 23:09:57'),
(58, 'Zbxt8r', 1603037, '2022-12-15 23:33:04'),
(59, 'efAguH', 1603037, '2022-12-15 23:33:37'),
(60, 'MytRlN', 1603037, '2022-12-15 23:34:02'),
(61, '3mV9Jl', 1603037, '2022-12-15 23:36:07'),
(62, 'nQgKNA', 1603037, '2022-12-15 23:40:19'),
(63, '5xVePM', 1603037, '2022-12-15 23:41:06');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

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
