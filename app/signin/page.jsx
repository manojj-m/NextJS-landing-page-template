"use client"
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/radar
import { ResponsiveRadar } from '@nivo/radar';
import {radar_topic_scores_fin as score_data} from './evaluate_data.js';
import {radar_type_scores as type_data} from './evaluate_data.js';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


export default function Home() {

    const styles = {
        card: {
          border: '1px solid #ddd',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '4px'
        }
      };

return (
    <div style={{ height: '500px' }}> {/* Set a fixed height */}


    <ResponsiveRadar
        data={score_data}
        keys={[ 'weaker', 'weak', 'okay', 'strong', 'stronger' ]}
        indexBy="label"
        maxValue={100}
        valueFormat=" >-.0f"
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLevels={10}
        gridShape="linear"
        gridLabelOffset={20}
        dotSize={2}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderWidth={1}
        enableDotLabel={true}
        dotLabelYOffset={-2}
        colors={{ scheme: 'set2' }}
        fillOpacity={1}
        motionConfig="default"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 0,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />

    <div>
      {score_data.map((entry, index) => (
        <div key={index} style={styles.card}>
          <p><strong>{entry.label}:</strong> {entry.LO}</p>
        </div>
      ))}
    </div>


    <ResponsiveRadar
        data={type_data}
        keys={[ 'mark' ]}
        indexBy="type"
        maxValue={5}
        valueFormat=" >-.2f"
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLevels={10}
        gridShape="linear"
        gridLabelOffset={20}
        dotSize={2}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderWidth={1}
        enableDotLabel={true}
        dotLabelYOffset={3}
        colors={{ scheme: 'set2' }}
        fillOpacity={1}
        motionConfig="default"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 0,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />

    </div>
    );
}