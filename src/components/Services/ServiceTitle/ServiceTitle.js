import { motion } from 'framer-motion'
import { scrollToId } from '../../Common/helper';
import './styles.scss';
import AnimatedItems from '../../Common/Motion/AnimatedItems';

export function ServiceTitle({ appContext, data }) {

    const isCurrentPage = ["SERVICE-TITLE", "SERVICE-1"].includes(appContext.state?.pageConfig?.id);
    const Item = (item, index) => {
        return (
            <span onClick={() => {
                scrollToId(`SERVICE-${index + 1}`)
            }}>{item?.title || item}</span>
        )
    }
    return (
        <div className='page-text service-title themer' id="SERVICE-TITLE">
            <h2>Our Services</h2>
            <p>Graphicnix boasts over 10,000 accomplished projects, accompanied by the esteemed recognition of winning the German Editing Award for our exceptional editing. Partnering with us means collaborating with a dedicated team of professionals who are passionate about driving your success.</p>
            <h5>Image Editing</h5>
            <AnimatedItems animate={isCurrentPage} data={data} child={Item} />
            <h5>Video Editing</h5>
            <AnimatedItems animate={isCurrentPage} data={['video editing', 'vfx', 'sound fx', 'compositing', 'motion graphics', 'animation',]} child={Item} />
        </div>
    )
}