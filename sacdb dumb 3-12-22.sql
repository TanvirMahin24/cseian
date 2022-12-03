-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2022 at 02:02 PM
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
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `question_id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `replyer_id` int(11) DEFAULT NULL
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
(40, 'Software Engineering', 'Software Engineer', 15, 1, 1603036, 1);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `student_id` int(11) NOT NULL,
  `series` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `picture` text DEFAULT NULL,
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

INSERT INTO `member` (`student_id`, `series`, `name`, `picture`, `country`, `city`, `linkedin`, `email`, `contact_no`, `available_time_to_contact`, `password`, `user_role_id`) VALUES
(1603035, 16, 'Barik AhmedSadik', 'http://localhost:8080/resource/images?imageName=memberImage1603035.PNG', 'Bangladesh', 'Rajshahi', '', 'bariksadikruetabc@gmail.com', '01797975508', '7 am to 11 pm', 'a15e61e2ffc8bf3d016999753f3fb83f19e0d52280e3b4be0baad538c4bb3e5d40125be2406779b9', NULL),
(1603036, 16, 'DibboBorua', 'http://localhost:8080/resource/images?imageName=memberImage1603036.PNG', 'Bangladesh', 'Rajshahi', '', 'bariksadikruetabc@gmail.com', '01797975508', '7 am to 11 pm', '391904b6428a518b91f16fa9924a8617eae9effec82ede9cb99ef9357c9f0c409e0be5c5b6dd7345', NULL),
(1803034, 18, 'Nazmul HossainNahid', 'http://localhost:8080/resource/images?imageName=memberImage1803034.PNG', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', '96501bc2e3aa1ceaf2a422edea65600ad5d6be4451766793f49df4901718b14d839422ceb312322b', 1),
(1803035, 18, 'Siam Ahmed', 'http://localhost:8080/resource/images?imageName=memberImage1803035.PNG', 'Bangladesh', 'Rajshahi', '', 'nazm.nahid@gmail.com', '01797975508', '7 am to 11 pm', '9f9fa320503edc416d9fa61c6e56ba2ac256f3464c2bfdf076be9325dd823f69bd02b6deb53245b3', NULL);

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
  `post_image` text DEFAULT NULL,
  `post_woner_id` int(11) DEFAULT NULL,
  `post_date` date DEFAULT NULL
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
(1, 'STUDENT', ' current student'),
(2, 'FACULTY', 'Faculty at RUET CSE'),
(3, 'ADMIN', 'adminstrator');

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
(4, 'jobhistory', 39),
(5, 'post', 75);

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
(30, 'IEk4FP', 1603036, '2022-12-03 17:07:49');

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
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `replyer_id` (`replyer_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

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
  ADD CONSTRAINT `faq_ibfk_1` FOREIGN KEY (`replyer_id`) REFERENCES `member` (`student_id`);

--
-- Constraints for table `jobhistory`
--
ALTER TABLE `jobhistory`
  ADD CONSTRAINT `jobhistory_ibfk_1` FOREIGN KEY (`job_organization_id`) REFERENCES `institute` (`institute_id`),
  ADD CONSTRAINT `jobhistory_ibfk_2` FOREIGN KEY (`job_organization_brunch_id`) REFERENCES `brunch` (`brunch_id`),
  ADD CONSTRAINT `jobhistory_ibfk_3` FOREIGN KEY (`alumni_student_id`) REFERENCES `member` (`student_id`);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
