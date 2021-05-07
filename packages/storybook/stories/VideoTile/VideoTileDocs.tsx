// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { VideoTile } from '@azure/communication-react';
import { Canvas, Description, Heading, Props, Source, Title, Subheading } from '@storybook/addon-docs/blocks';
import React from 'react';
import { VideoTileExample as VideoTileStylineExample } from '../Styling/snippets/StylingVideoTile.snippet';
import { VideoTileExample } from './snippets/VideoTile.snippet';
import { VideoTilePlaceholderExample } from './snippets/VideoTilePlaceholder.snippet';

const VideoTileStylineExampleText = require('!!raw-loader!../Styling/snippets/StylingVideoTile.snippet').default;
const VideoTileExampleText = require('!!raw-loader!./snippets/VideoTile.snippet').default;
const VideoTilePlaceholderText = require('!!raw-loader!./snippets/VideoTilePlaceholder.snippet').default;

const importStatement = `import { VideoTile } from '@azure/communication-react';`;

export const getDocs: () => JSX.Element = () => {
  return (
    <>
      <Title>VideoTile</Title>
      <Description>
        The VideoTile component displays a static component or the available video stream of a participant.
      </Description>

      <Heading>Importing</Heading>
      <Source code={importStatement} />

      <Heading>Example</Heading>
      <Subheading>Default Usage</Subheading>
      <Description>
        The default VideoTile component shows a Persona with the initials of `avatarName` when no video is available.
      </Description>
      <Canvas>
        <VideoTileExample />
      </Canvas>
      <Source code={VideoTileExampleText} />

      <Subheading>Custom Placeholder</Subheading>
      <Description>
        A custom placeholder can be provided to override the default Persona avatar by providing a JSX element to the
        `placeholderProvider` prop.
      </Description>
      <Canvas>
        <VideoTilePlaceholderExample />
      </Canvas>
      <Source code={VideoTilePlaceholderText} />

      <Heading>Styling</Heading>
      <Description>
        A VideoTile component can be styled just like other components using the `styles` property.
      </Description>
      <Canvas>
        <VideoTileStylineExample />
      </Canvas>
      <Source code={VideoTileStylineExampleText} />

      <Heading>Props</Heading>
      <Props of={VideoTile} />
    </>
  );
};
