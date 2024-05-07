

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AddressAutocomplete = () => {
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef(null); // Create a ref for the input element

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC0AJETtPop_GLX0XJa-gi-Y1b905Qry2o&libraries=places';
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                setAddress(place.formatted_address);

                // Fetch postal code using latitude and longitude
                const latLng = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };

                // Initialize Geocoder
                const geocoder = new window.google.maps.Geocoder();

                // Use Geocoder to fetch postal code
                geocoder.geocode({ location: latLng }, (results, status) => {
                    if (status === 'OK' && results[0]) {
                        // Find postal code from results
                        const postalCodeComponent = results[0].address_components.find(component =>
                            component.types.includes('postal_code')
                        );
                        if (postalCodeComponent) {
                            // Set the postal code
                            setPincode(postalCodeComponent.long_name);
                        } else {
                            console.error('Postal code not found');
                        }
                    } else {
                        console.error('Geocoder failed due to: ' + status);
                    }
                });
            });
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Log the address and postal code to the console
        console.log("Address:", address);
        console.log("Postal Code:", pincode);
    };

    return (
        <>
            <div>
                {/* Navbar */}
                <Navbar />

                {/* card and form */}
                <div className="p-5 card position-absolute top-50 start-50 translate-middle bg-secondary" style={{ width: 'max-content' }}>
                    <h4 className="mb-5">Check Service availability in your area</h4>
                    <form onSubmit={handleSubmit} id="addressForm">
                        {/* Use ref to reference the input element */}
                        <input
                            ref={inputRef}
                            className="mb-3"
                            type="text"
                            id="addressInput"
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <button type="submit" style={{ width: 'auto' }}>
                            Check Availability---→
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddressAutocomplete;
