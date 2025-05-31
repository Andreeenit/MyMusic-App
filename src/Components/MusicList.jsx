/* eslint-disable no-unused-vars */
import React from 'react'

const MusicList = ({group, page}) => {
    console.log("group:", group)
    return (
        <div className='music-container'>
            {group && (
                group.map((groups, index) => {
                    return (
                        <li key={index}>
                            {groups.name}
                        </li>
                    )
                })
            )}
        </div>
    )
}

export default MusicList
