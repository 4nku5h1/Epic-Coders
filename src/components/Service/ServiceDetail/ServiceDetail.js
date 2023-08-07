import { useParams } from 'react-router-dom'

import { services } from '../../data';
import AnimatedItems from '../../Common/Motion/AnimatedItems';
import ImageCompare from '../../Common/ImageCompare/ImageCompare';
import Tablet from '../../Common/Tablet/Tablet';

import './styles.scss'
import DetailsSection from '../../Common/DetailsSection/DetailsSection';

export default function ServiceDetail() {
    const { id: pageName } = useParams();
    const pageData = services.filter((service) => service.path === pageName)[0];
    console.log(pageData)
    const Item = (item) => {
        return (
            <span className='small-capital-heading'>{item}</span>
        )
    }

    return (
        <div className='service-details themer' id={'SERVICE-PAGE'}>
            <img className="banner" src={pageData.imageBanner} />
            <div className='container'>
                <div className='content-hp section'>
                    <h3>{pageData.title}</h3>
                    {pageData.additionalData?.description.map((para) => {
                        return (
                            <p className='paragraph'>{para}</p>
                        )
                    })}

                </div>
                <DetailsSection paragraph={pageData.additionalData?.types?.description} items={pageData.additionalData?.types?.list} />
                <div className="images section">
                    <Tablet title={pageData.title} height={400} width={800} child={
                        <ImageCompare imageBeforeOverview={pageData.imageBeforeOverview} imageAfterOverview={pageData.imageAfterOverview} disablecompare={false} />
                    } />
                </div>
            </div>
        </div>
    )
}