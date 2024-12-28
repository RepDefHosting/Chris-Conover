import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import moment from 'moment'
import { featuredImagePropTypes } from '../proptypes'

const Moment = moment().constructor

const PhotoCard = ({ count, image, slug, pageTitle, date, content }) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <article ref={ref}>
      <img src={!!image ? image.d.childImageSharp.fluid.src : '/img/default-blog-thumb-01.webp'} alt={image.alt} width="470" height="250" />
      <p>{content}</p>
    </article>
  )
}

export const postPropTypes = {
  count: PropTypes.number.isRequired,
  image: featuredImagePropTypes,
  slug: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Moment),
  content: PropTypes.string,
}

PhotoCard.propTypes = postPropTypes

export default PhotoCard