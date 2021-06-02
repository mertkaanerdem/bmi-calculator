import React from 'react'
import { Card } from 'react-bootstrap';
import './Recipes.css'


function HightWeight() {
    return (
        <Card className="border border-danger border-5 p-2 col-12">
            <Card.Body>
            <Card.Header className="text-danger">
                a few ideas for you
                </Card.Header>
            <Card.Text className="fontSize">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">fresh fruits</li>
                <li class="list-group-item">whole grains</li>
                <li class="list-group-item">proteins</li>
                <li class="list-group-item">dairy</li>
            </ul>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}


function NormalWeight() {
    return (
        <Card className="border border-success border-5 p-2 col-12">
            <Card.Body>
            <Card.Header className="text-success">
                a few ideas for you
                </Card.Header>
            <Card.Text className="fontSize">
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">You are doing well</li>

            </ul>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

function LowWeight() {
    return (
        <Card className="border border-danger border-5 p-2 col-12">
            <Card.Body>
            <Card.Header className="text-danger">
                a few ideas for you
                </Card.Header>
            <Card.Text className="fontSize">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">fresh fruits</li>
                <li class="list-group-item">whole grains</li>
                <li class="list-group-item">proteins</li>
                <li class="list-group-item">dairy</li>
            </ul>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export {HightWeight, NormalWeight ,LowWeight}
