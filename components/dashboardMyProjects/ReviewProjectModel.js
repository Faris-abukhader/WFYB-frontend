import { CustomModel, InputWithLabel, NoDataFound, ItemGenerator } from '../general/general'
import { getTranslatedText as t } from '../../localization/config'
export default function ReviewProjectModel({ show, toggle, language, data,setProjectUpdateId }) {
    return (
        <CustomModel show={show} toggle={toggle} language={language} title={t('reviewProject', language)}>
            <CustomModel.Body>
                <div className='flex justify-end'>
                   <CustomModel.EditButton onClickHandler={()=>setProjectUpdateId(data.id)}/>
                </div>
                <div className='flex items-center gap-3'>
                    <InputWithLabel label={t('title', language)} value={data.title} hasHandler={false} />
                    <InputWithLabel label={t('country', language)} value={data.country} hasHandler={false} />
                </div>
                <div className='flex items-center gap-3'>
                    <InputWithLabel label={t('category', language)} value={data.category} hasHandler={false} />
                    <InputWithLabel label={t('projectType', language)} value={data.projectType} hasHandler={false} />
                </div>
                <InputWithLabel label={t('description', language)} value={data.description} hasHandler={false} />
                <div className='flex items-center gap-3'>
                    <InputWithLabel label={t('shortIntro', language)} value={data.shortIntro} hasHandler={false} />
                    <InputWithLabel label={t('projectImage', language)} value={data.projectImage} hasHandler={false} />
                </div>
                <div className='flex items-center gap-3'>
                    <InputWithLabel label={t('fundingGoal', language)} value={data.fundingGoal} hasHandler={false} />
                    <InputWithLabel label={t('compaignDurationEnd', language)} value={new Date(data.compaignDurationEnd).toLocaleString()} hasHandler={false} />
                </div>
                <InputWithLabel label={t('risksAndChallenges', language)} value={data.risksAndChallenges} hasHandler={false} />
                <ItemGenerator label={t('rewardList', language)} showAddButton={false}>
                    {data.rewardList && data.rewardList.length > 0 ? (
                        data.rewardList.map((reward, index) => {
                            return (
                                <div key={index}>
                                    <div className='flex items-center gap-2'>
                                        <InputWithLabel label={t('title', language)} value={reward.title} hasHandler={false} />
                                        <InputWithLabel label={t('amount', language)} value={reward.amount} hasHandler={false} />
                                        <InputWithLabel label={t('description', language)} value={reward.description} hasHandler={false} />
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <NoDataFound label={t('rewardListIsEmpty', language)} />
                    )}
                </ItemGenerator>
                <CustomModel.Footer>
                    <CustomModel.CloseButton onClickHandler={() => toggle()}>{t('close',language)}</CustomModel.CloseButton>
                </CustomModel.Footer>
            </CustomModel.Body>
        </CustomModel>
    )
}
