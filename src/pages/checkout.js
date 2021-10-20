import React, {useState} from 'react'
import Cart from '../components/element/Cart'
import MagicInput from '../components/element/MagicInput'
import MagicSelect from '../components/element/MagicSelect'
import Config from '../models/Config'
import dbConnect from '../utils/dbConnect'

const countryOptions = [
    {
        label:'India',
        value:'IN'
    },
    {
        label: 'United State of America',
        value: 'US'
    }
]

const stateOptions = [
    {
        label:'India',
        value:'IN'
    },
    {
        label: 'United State of America',
        value: 'US'
    }
]

const districtOptions = [
    {
        label:'India',
        value:'IN'
    },
    {
        label: 'United State of America',
        value: 'US'
    }
]

const Page = (props) => {
    console.log("props",props)
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [infoForm, setInfoForm] = useState({})

    const handleChange = (e) => {
        let infoObj = {...infoForm};
        infoObj[e.target.name] = e.target.value;
        setInfoForm(infoObj);
    }
    
    const handleSelectChange = (e) => {
        // console.log(e.target.value)
        let infoObj = {...infoForm};
        infoObj[e.target.name] = e.target.value;
        setInfoForm(infoObj);
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="split-view">
                    <div className="page-left" >
                        <h2 className="brand-logo">eCommerce</h2>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                            <div>
                                <div className="form-heading">
                                    <h4>Contact information</h4>
                                    <p>Already have an account? <a href="#">Login</a></p>
                                </div>
                                <div className="form-body">
                                    <MagicInput name="email" label="Email or mobile number" value={infoForm?.email ? infoForm?.email : ""} onChange={(e) => handleChange(e)}/>
                                    <div className="radio-container">
                                        <label><input type="checkbox" /> Keep me up to date on news and offers</label>
                                    </div>
                                </div>

                                <div className="form-heading">
                                    <h4>Shipping address</h4>
                                </div>
                                <div className="form-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                                <MagicInput name="firstName" label="First Name" value={infoForm?.firstName ? infoForm?.firstName : ""} onChange={(e) => handleChange(e)}/>
                                           
                                        </div>
                                        <div className="col-md-6">
                                                <MagicInput name="lastName" label="Last Name" value={infoForm?.lastName ? infoForm?.lastName : ""} onChange={(e) => handleChange(e)}/>
                                        </div>
                                        <div className="col-md-12">
                                            <MagicInput name="address1" label="Address Line 1" value={infoForm?.address1 ? infoForm?.address1 : ""} onChange={(e) => handleChange(e)}/>
                                        </div>
                                        <div className="col-md-12">
                                            <MagicInput name="address2" label="Address Line 2" value={infoForm?.address2 ? infoForm?.address2 : ""} onChange={(e) => handleChange(e)}/>
                                        </div>
                                        <div className="col-md-12">
                                            <MagicInput name="city" label="City" value={infoForm?.city ? infoForm?.city : ""} onChange={(e) => handleChange(e)}/>
                                        </div>
                                        <div className="col-md-6">
                                            <MagicSelect name="country" label="Country" value={infoForm?.country ? infoForm?.country : countryOptions[0].value} onChange={(e) => handleSelectChange(e)} options={props.countries}/>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <MagicSelect name="state" label="State" value={infoForm?.state ? infoForm?.state : stateOptions[0].value} onChange={(e) => handleSelectChange(e)} options={stateOptions}/>
                                        </div>
                                        <div className="col-md-6">
                                            <MagicSelect name="district" label="District" value={infoForm?.district ? infoForm?.district : districtOptions[0].value} onChange={(e) => handleSelectChange(e)} options={districtOptions}/>
                                        </div> */}
                                        <div className="col-md-6">
                                            <MagicInput name="pincode" label="Pin Code" value={infoForm?.pincode ? infoForm?.pincode : ""} onChange={(e) => handleChange(e)}/>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="radio-container">
                                                <label><input type="checkbox"/> Save this information for next time</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <a href="#" className="btn btn-primary">Continue to Shipping</a>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="#" className="btn btn-primary-bordered">Return back</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="page-right">
                        <Cart/>
                    </div></div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    await dbConnect()
  
    // const countries = await fetchCountryList();
  /* find all the data in our database */
  const result = await Config.find({});
    return { props: { countries: result[0].data } }
}
  
export default Page;