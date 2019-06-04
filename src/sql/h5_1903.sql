-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 02:02:03
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h5_1903`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(16) NOT NULL COMMENT '用户id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `isNew` varchar(50) NOT NULL,
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(16) NOT NULL COMMENT '商品库存',
  `pic` varchar(255) NOT NULL COMMENT '商品图片',
  `details` varchar(255) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `isNew`, `price`, `num`, `pic`, `details`) VALUES
(1, '[{"p1":"小米9 6GB+128GB","p2":"骁龙855，索尼4800万超广角三摄"}]', '[{"flag":"flag-new","text":"新品"}]', 2999, 55, '[{ "title":"small" ,"src":"imgs/iphone0-1.jpg","src1":"imgs/iphone0-2.jpg"}]', '全曲面轻薄设计，全息幻彩玻璃机身 / 骁龙855旗舰处理器 / 20W无线闪充，标配27W有线快充 / 索尼4800万超广角微距三摄 / 极速屏下指纹解锁 / 多功能NFC'),
(2, '[{"p1":"小米8青春版6GB+64GB","p2":"潮流镜面渐变色，2400万自拍旗舰"}]', '[{"flag":"flag-newred","text":"减400元"}]', 1999, 33, '[{ "title":"small" ,"src":"imgs/iphone1-1.jpg","src1":"imgs/iphone1-2.jpg"}]', '与小米9相同的超级夜景算法 / 2400万旗舰自拍 / Dual PD 双核对焦 / 潮流镜面渐变色 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / 骁龙660AIE处理器'),
(3, '[{"p1":"小米6X 6GB+128GB","p2":"轻薄美观的拍照手机"}]', '[{"flag":"flag-newred","text":"打8折"}]', 1599, 88, '[{ "title":"small" ,"src":"imgs/iphone2-1.jpg","src1":"imgs/iphone2-2.jpg"}]', '轻薄美观的拍照手机 / 前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器'),
(4, '[{"p1":"小米8 SE 6GB+64GB","p2":"三星 AMOLED 全面屏，骁龙710"}]', '[{"flag":"flag-new","text":"新品"}]', 1599, 500, '[{ "title":"small" ,"src":"imgs/iphone3-1.jpg","src1":"imgs/iphone3-2.jpg"}]', '小屏旗舰 / AI 超感光双摄 / 前置2000万柔光自拍 / 三星 AMOLED 全面屏 / 骁龙710处理器'),
(5, '[{"p1":"小米9 6GB+128GB","p2":"骁龙855，索尼4800万超广角三摄"}]', '[{"flag":"flag-new","text":"新品"}]', 2999, 55, '[{ "title":"small" ,"src":"imgs/iphone0-1.jpg","src1":"imgs/iphone0-2.jpg"}]', '全曲面轻薄设计，全息幻彩玻璃机身 / 骁龙855旗舰处理器 / 20W无线闪充，标配27W有线快充 / 索尼4800万超广角微距三摄 / 极速屏下指纹解锁 / 多功能NFC'),
(6, '[{"p1":"小米9 6GB+128GB","p2":"骁龙855，索尼4800万超广角三摄"}]', '[{"flag":"flag-new","text":"新品"}]', 2999, 55, '[{ "title":"small" ,"src":"imgs/iphone0-1.jpg","src1":"imgs/iphone0-2.jpg"}]', '全曲面轻薄设计，全息幻彩玻璃机身 / 骁龙855旗舰处理器 / 20W无线闪充，标配27W有线快充 / 索尼4800万超广角微距三摄 / 极速屏下指纹解锁 / 多功能NFC'),
(7, '[{"p1":"小米9 6GB+128GB","p2":"骁龙855，索尼4800万超广角三摄"}]', '[{"flag":"flag-new","text":"新品"}]', 2999, 55, '[{ "title":"small" ,"src":"imgs/iphone0-1.jpg","src1":"imgs/iphone0-2.jpg"}]', '全曲面轻薄设计，全息幻彩玻璃机身 / 骁龙855旗舰处理器 / 20W无线闪充，标配27W有线快充 / 索尼4800万超广角微距三摄 / 极速屏下指纹解锁 / 多功能NFC'),
(8, '[{"p1":"小米9 6GB+128GB","p2":"骁龙855，索尼4800万超广角三摄"}]', '[{"flag":"flag-new","text":"新品"}]', 2999, 55, '[{ "title":"small" ,"src":"imgs/iphone0-1.jpg","src1":"imgs/iphone0-2.jpg"}]', '全曲面轻薄设计，全息幻彩玻璃机身 / 骁龙855旗舰处理器 / 20W无线闪充，标配27W有线快充 / 索尼4800万超广角微距三摄 / 极速屏下指纹解锁 / 多功能NFC');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `user_id` int(20) NOT NULL COMMENT '用户id',
  `user_name` varchar(20) NOT NULL COMMENT '用户名',
  `user_pwd` varchar(20) NOT NULL COMMENT '用户密码',
  `user_email` varchar(20) NOT NULL COMMENT '用户邮箱',
  `user_sex` varchar(4) NOT NULL COMMENT '用户性别'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_pwd`, `user_email`, `user_sex`) VALUES
(58, 'zhuxiaohang11', '123123', '895600200@qq.com', '男'),
(56, 'zhuxiaohang13', '123123', '895600200@qq.com', '男'),
(57, 'zhuxiaohang132', '123123', '895600200@qq.com', '男'),
(45, 'zhuxiaohang', '123123', '895600200@qq.com', '男'),
(47, 'zhuxiaohang1', '123123', '895600200@qq.com', '男'),
(48, 'zhuxiaohang12', '123123', '895600200@qq.com', '男'),
(49, 'zhuxiaohang123', '123123', '895600200@qq.com', '男'),
(50, 'zhuxiaohang1234', '123123', '895600200@qq.com', '男'),
(51, 'zhuxiaohang12312', '123123', '895600200@qq.com', '男');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=95;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
