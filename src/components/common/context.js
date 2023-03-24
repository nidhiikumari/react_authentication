import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();
export function AppProvider(props) {
  const { children } = props;
  // profile state
  const [alignment, setAlignment] = useState('web');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPsd, setConfirmPsd] = useState('');
  // business state
  const [brandName, setBrandName] = useState('');
  const [brandType, setBrandType] = useState('Select Type of Your Brand');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [taxId, setTaxId] = useState('');
  const [data, setData] = useState('Non adult beverage kroger market supplier waiver and release');
  const [businessFlag, setBusinessFlag] = useState(false);
  const [businessError, setBusinessError] = useState({});
  const [flag, setFlag] = useState(false);
  const [formError, setFormError] = useState({});
  const [showNextPage, setShowNextPage] = useState(false);

  const Value = useMemo(() => ({
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    mobile,
    setMobile,
    password,
    setPassword,
    confirmPsd,
    setConfirmPsd,
    setFlag,
    setFormError,
    flag,
    formError,
    showNextPage,
    setShowNextPage,
    brandName,
    setBrandName,
    brandType,
    setBrandType,
    address,
    setAddress,
    city,
    setCity,
    pin,
    setPin,
    taxId,
    setTaxId,
    businessFlag,
    setBusinessFlag,
    businessError,
    data,
    setBusinessError
  }), [showNextPage,
    firstName,
    flag,
    data,
    formError,
    lastName,
    confirmPsd,
    password,
    mobile,
    email,
    brandName,
    brandType,
    address,
    city,
    pin,
    taxId,
    businessFlag,
    businessError]);

  return (
    <AppContext.Provider value={Value}>
      {children}
    </AppContext.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.element.isRequired
};
