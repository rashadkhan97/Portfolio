//import { HiOutlineMail } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
//import { FiPhone } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
//import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="rsrashad99@gmail.com" Image={MdMarkEmailUnread} />
      <SingleInfo text="+880 01959-981909" Image={FaPhone} />
      <SingleInfo text="Dhaka, Bangladesh" Image={MdLocationOn} />
    </div>
  );
};

export default ContactInfo;
