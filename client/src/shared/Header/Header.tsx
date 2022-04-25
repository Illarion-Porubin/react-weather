import React from "react";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import Select from "react-select";
import s from "./Header.module.scss";

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];


  const customStyles = {
    option: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
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
        <div className={s.change_theme}>
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
