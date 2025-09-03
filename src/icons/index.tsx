import { TbCardsFilled } from "react-icons/tb";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

export const AngleRightIcon = ({size, classname}:IconProps) => <FaAngleRight size={size} className={classname} />

export const AngleDownIcon = ({size, classname}:IconProps) => <FaAngleDown size={size} className={classname} />

export const CardIcon = ({size, classname}:IconProps) => <TbCardsFilled size={size} className={classname} />

export const SearchIcon = ({size, classname}:IconProps) => <FaMagnifyingGlass size={size} className={classname} />

export const MenuIcon = ({size, classname}:IconProps) => <IoMenu size={size} className={classname} />