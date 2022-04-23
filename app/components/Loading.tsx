import PropTypes from "prop-types";
import React from "react";

const styles = {
    content: {
        fontSize: '35px',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '20px',
        textAlign: 'center',
    } as React.CSSProperties,
}

export default function Loading ({text = 'Loading', speed = 300}) {
  const [content, setContent] = React.useState(text)

  React.useEffect(() => {
    const id = setInterval(() => {
      setContent(content => {
        return content === `${text}...` ? text : `${content}.`
      })
    }, speed)

    return () => clearInterval(id)
  }, [text, speed])

  return (
    <p style={styles.content}>
      {content}
    </p>
  )
}

Loading.propsTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
}