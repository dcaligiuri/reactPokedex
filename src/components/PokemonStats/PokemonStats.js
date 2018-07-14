import React, {Component} from 'react';
//import classes from './PokemonStats.css';
import {Bar} from 'react-chartjs-2';

class PokemonStats extends Component{

    state = {
        chartData: {
            labels: ['Boston', 'Worchester', 'Springfield', 'Lowell'],
            datasets: [
                {
                    label: 'Stats',
                    data: [
                        617594,
                        181045,
                        153060,
                        106519
                    ],
                    backgroundColor: [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(75,192,192,0.6)',
                    ]
                }
            ]
        }
    }

    componentWillMount(){

    }
    
    render(){
        return (
            <div className="chart">
                <Bar 
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Stats',
                            fontSize: '12'
                        },
                        legend: {
                            display: false
                        }
                    }
                   
                }
                  
                    />
            
            </div>
        )
            
            
    }
}

export default PokemonStats;