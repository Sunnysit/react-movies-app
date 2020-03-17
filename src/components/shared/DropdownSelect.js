import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: 180
  }
}));

const DropdownSelect = ({ menuName, menuOptions, handleCategoryChange }) => {
  const classes = useStyles();

  const inputLabel = useRef(null);
  const [selectValue, setSelectValue] = useState("");
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setSelectValue(event.target.value);
    handleCategoryChange(event.target.value);
  };

  const renderMenuOptions = menuOptions.map((option, index) => (
    <MenuItem key={index} value={option.value}>
      {option.name}
    </MenuItem>
  ));

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="category-label">
          {menuName}
        </InputLabel>
        <Select
          value={selectValue}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          {renderMenuOptions}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownSelect;
