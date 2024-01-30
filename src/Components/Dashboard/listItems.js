import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import CategoryIcon from '@mui/icons-material/Category';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { GiBookshelf } from "react-icons/gi";
import { GrChapterAdd } from "react-icons/gr";
import { FaSwatchbook } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { LuFileType2 } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { TbSection } from "react-icons/tb";
import { FaPen } from "react-icons/fa";
import { BsBookshelf } from "react-icons/bs";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/dashboard/MainForm">
      <ListItemIcon>
        <FaWpforms />
      </ListItemIcon>
      <ListItemText primary="Main Form" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/context">
      <ListItemIcon>
        <LuFileType2 />
      </ListItemIcon>
      <ListItemText primary="Context type" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/category">
      <ListItemIcon>
        <MdCategory />
      </ListItemIcon>
      <ListItemText primary="Category" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/subcategory">
      <ListItemIcon>
        <FaSwatchbook />
      </ListItemIcon>
      <ListItemText primary="Sub-Category" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/book">
      <ListItemIcon>
        <FaBook />
      </ListItemIcon>
      <ListItemText primary="Books" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/volume">
      <ListItemIcon>
        <BsBookshelf />
      </ListItemIcon>
      <ListItemText primary="Volume" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/section">
      <ListItemIcon>
        <TbSection />
      </ListItemIcon>
      <ListItemText primary="Section" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/chapter">
      <ListItemIcon>
        <GrChapterAdd />
      </ListItemIcon>
      <ListItemText primary="Chapter" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/Sloka">
      <ListItemIcon>
        <FaPen />
      </ListItemIcon>
      <ListItemText primary="Sloka" />
    </ListItemButton>
  </React.Fragment>
);


