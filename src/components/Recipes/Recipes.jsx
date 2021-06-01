import React from 'react'
import { Card } from 'react-bootstrap';
import './Recipes.css'


function HightWeight() {
    return (
        <Card>
            <Card.Body>
            <Card.Header>
                Çok Kilo Tarifi
                </Card.Header>
            <Card.Text className="fontSize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}


function NormalWeight() {
    return (
        <Card>
            <Card.Body>
            <Card.Header>
                Normal Kilo Tarifi
                </Card.Header>
            <Card.Text className="fontSize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

function LowWeight() {
    return (
        <Card>
            <Card.Body>
            <Card.Header>
                Düşük Kilo Tarifi
                </Card.Header>
            <Card.Text className="fontSize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae, ab ex vitae eum sequi omnis fugiat repudiandae voluptatum et soluta.
                Iure eum officiis laudantium esse harum quia nam pariatur vel.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export {HightWeight, NormalWeight ,LowWeight}
