import React, {useEffect, useState} from "react";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import Select from "react-select";
import s from "./Header.module.scss";
import {useTheme} from '../../hooks/useTheme';
import { Theme } from "../../context/ThemeConext";

interface Props {}

export const Header = (props: Props) => {
  const theme = useTheme();


  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];

  const customStyles = {
    option: (styles: any) => ({
      ...styles,
      width: "100%",
      marginTop: '6px',
      height: "36px",
      border: "none",
      borderRadius: "6px",
      zIndex: '100',
    }),
    control: (styles: any) => ({
      ...styles,
      minWidth: '14rem',
      backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : '#fff',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
    menu: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
      backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : '#fff' ,
    }),
  };

 
    

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelecotr id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelecotr id="change-theme" />
        </div>
        <Select 
          defaultValue={options[0]}
          styles={customStyles}
          options={options}
        />
      </div>
    </header>
  );
};
