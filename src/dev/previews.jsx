import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import { CardList } from '../components/card-list/CardList';
import { Card } from '../components/card/Card';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CardList">
                <CardList/>
            </ComponentPreview>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;