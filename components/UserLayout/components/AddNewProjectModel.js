import { CustomModel, InputWithLabel, NoDataFound, DeleteButton, SelectList, ItemGenerator } from '../../general/general'
import { getTranslatedText as t } from '../../../localization/config'
import { FieldArray, Form, Formik, getIn } from 'formik';
import { projectCategories, projectType } from '../../../utils/utils'
import * as Yup from 'yup';
import PostRequest from '../../../hooks/PostRequest';
import { useSession } from 'next-auth/react';
export default function AddNewProjectModel({ show, toggle, language }) {
  const { sendPostRequest } = PostRequest()
  const session = useSession()
  const token = session?.data?.user?.token
  const ownerId = session?.data?.user?.id
  return (
    <CustomModel show={show} toggle={toggle} language={language} title={t('addNewProject', language)}>
      <Formik
        initialValues={{
          ownerId: ownerId,
          title: '',
          country: '',
          category: '',
          description: '',
          shortIntro: '',
          projectImage: '',
          compaignDurationEnd: '',
          fundingGoal: '',
          rewardList: [],
          risksAndChallenges: '',
          projectType: ''
        }}
        validationSchema={Yup.object({
          title: Yup.string().min(2).max(254).required(),
          country: Yup.string().min(2).max(254).required(),
          category: Yup.string().min(2).max(254).required(),
          description: Yup.string().min(2).max(254).required(),
          shortIntro: Yup.string().min(2).max(254).required(),
          projectImage: Yup.string().min(2).max(254).required(),
          compaignDurationEnd: Yup.string().min(2).max(254).required(),
          fundingGoal: Yup.number().min(2).required(),
          risksAndChallenges: Yup.string().min(2).max(254).required(),
          projectType: Yup.string().min(2).max(254).required(),
          rewardList: Yup.array().of(
            Yup.object().shape({
              title: Yup.string().min(2).max(254).required(),
              amount: Yup.number().min(2).required(),
              description: Yup.string().min(2).max(254).required(),
            })
          )
        })
        }

        onSubmit={(values, actions) => {
          console.log('from on submit')

          console.log(values)

          let temp = values
          temp.ownerId = ownerId
          temp.compaignDurationEnd = new Date(values.compaignDurationEnd)

          const closeRequest = () => {
            actions.resetForm()
            toggle()
          }
          sendPostRequest('project', { ...temp }, token, language, true, closeRequest)
        }}
      >
        {(props) => (
          <CustomModel.Body>
            <Form>
              <div className='flex items-center gap-3'>
                <InputWithLabel label={t('title', language)} isValid={props.errors.title ? false : true} name={`title`} value={props.values.title} inputHandler={props.handleChange} />
                <InputWithLabel label={t('country', language)} isValid={props.errors.country ? false : true} name={`country`} value={props.values.country} inputHandler={props.handleChange} />
                <InputWithLabel label={t('fundingGoal', language)} type={`number`} isValid={props.errors.fundingGoal ? false : true} name={`fundingGoal`} value={props.values.fundingGoal} inputHandler={props.handleChange} />
              </div>
              <div className='flex items-center gap-3'>
                <SelectList onChange={props.handleChange} name={`category`} isValid={props.errors.category ? false : true} label={t('category', language)}>
                  {projectCategories && projectCategories.map((category, index) => <SelectList.Option key={index} value={category}>{t(category, language)}</SelectList.Option>)}
                </SelectList>
                <SelectList onChange={props.handleChange} name={`projectType`} isValid={props.errors.category ? false : true} label={t('category', language)}>
                  {projectType && projectType.map((type, index) => <SelectList.Option key={index} value={type}>{t(type, language)}</SelectList.Option>)}
                </SelectList>
              </div>
              <InputWithLabel label={t('description', language)} isTextArea={true} isValid={props.errors.description ? false : true} name={`description`} value={props.values.description} inputHandler={props.handleChange} />
              <div className='flex items-center gap-3'>
                <InputWithLabel label={t('shortIntro', language)} isValid={props.errors.shortIntro ? false : true} name={`shortIntro`} value={props.values.shortIntro} inputHandler={props.handleChange} />
                <InputWithLabel label={t('projectImage', language)} isValid={props.errors.projectImage ? false : true} name={`projectImage`} value={props.values.projectImage} inputHandler={props.handleChange} />
              </div>
              <InputWithLabel label={t('compaignDurationEnd', language)} type={`date`} isValid={props.errors.compaignDurationEnd ? false : true} name={`compaignDurationEnd`} value={props.values.compaignDurationEnd} inputHandler={props.handleChange} />
              <InputWithLabel label={t('risksAndChallenges', language)} isTextArea={true} isValid={props.errors.risksAndChallenges ? false : true} name={`risksAndChallenges`} value={props.values.risksAndChallenges} inputHandler={props.handleChange} />
              <FieldArray name="rewardList">
                {(arrayHelpers) => (
                  <ItemGenerator label={t('rewardList', language)} addButtonHandler={() => arrayHelpers.push({ title: '', amount: 0, description: '' })}>
                    {props.values.rewardList && props.values.rewardList.length > 0 ? (
                      props.values.rewardList.map((contact, index) => {
                        return (
                          <div key={index}>
                            <div className='flex items-center gap-2'>
                              <InputWithLabel label={t('title', language)} isValid={getIn(props.errors, `rewardList[${index}].title`) ? false : true} name={`rewardList[${index}].title`} value={contact.title} inputHandler={props.handleChange} />
                              <InputWithLabel label={t('amount', language)} type={`number`} isValid={getIn(props.errors, `rewardList[${index}].amount`) ? false : true} name={`rewardList[${index}].amount`} value={contact.amount} inputHandler={props.handleChange} />
                              <InputWithLabel label={t('description', language)} isValid={getIn(props.errors, `rewardList[${index}].description`) ? false : true} name={`rewardList[${index}].description`} value={contact.description} inputHandler={props.handleChange} />
                              <div className='px-1'>
                                <DeleteButton onClick={() => arrayHelpers.remove(index)} />
                              </div>
                            </div>
                          </div>
                        )
                      })
                    ) : (
                      <NoDataFound label={t('rewardListIsEmpty', language)} />
                    )}
                  </ItemGenerator>
                )}
              </FieldArray>
              <CustomModel.Footer>
                <CustomModel.ConfirmButton disable={!props.isValid} onClickHandler={() => { }} >confirm</CustomModel.ConfirmButton>
                <CustomModel.CloseButton onClickHandler={() => toggle()}>close</CustomModel.CloseButton>
              </CustomModel.Footer>
              <pre>{JSON.stringify(props.values, null, 2)}</pre>
            </Form>
          </CustomModel.Body>
        )}
      </Formik>
    </CustomModel>
  )
}
