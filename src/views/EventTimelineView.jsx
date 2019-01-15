import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work'
import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux'
class EventTimelineView extends Component {

    render() {
        return (
            < VerticalTimeline>
                {this.props.events.map(el => <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={el.start}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <Typography variant="h4">{el.title}</Typography>
                    <Typography variant="p">{el.description}</Typography>
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                </VerticalTimelineElement>
                )}


            </VerticalTimeline>

        )
    }
}
const mapStateToProps = (state) => ({
  events:state
})

export default connect(mapStateToProps,null)(EventTimelineView)

