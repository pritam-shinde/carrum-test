import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Styles from '../../../styles/components-style/custom-buttons/KnowMoreBtn/knowMoreBtn.module.css'

const KnowMoreBtn = ({ btnTitle, btnLink, anchor, navlink, ariaLabel }) => {
    return (
        <>
            {
                navlink ? <Button className={`${Styles.knowMoreBtn} rounded-sm me-1 mt-md-0 mt-2`}>
                    <a href={btnLink} aria-label={ariaLabel || "Icon filled"}>
                        {btnTitle}
                    </a>
                </Button> : anchor ? <Button className={`${Styles.knowMoreBtn} rounded-sm me-1 mt-md-0 mt-2`}>
                    <a href={btnLink} aria-label={ariaLabel || "Icon filled"} >{btnTitle}</a>
                </Button> : null
            }
        </>
    )
}

export default KnowMoreBtn