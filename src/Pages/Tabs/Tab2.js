import React from 'react'
import { Tab2Data } from '../../Assets/TabsData'
import { ImageTabComponent} from '../../Components/ImageTabComponent'

export const Tab2 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {Tab2Data.map((data, index) => (
        <ImageTabComponent key={index} data={data} />
      ))}
    </div>
  )
}
