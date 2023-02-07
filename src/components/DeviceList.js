import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import './components.css';

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        
        <Row className='device-list'>
            {device.devices.map(device =>
                <DeviceItem className="device-item" key={device.id} device={device}/>
            )}
        </Row>
        
    );
});

export default DeviceList;
