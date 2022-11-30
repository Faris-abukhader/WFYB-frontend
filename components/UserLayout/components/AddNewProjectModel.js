import { CustomModel, InputWithLabel, NoDataFound, DeleteButton, CustomDropdown, SelectList } from '../../general/general'
import { getTranslatedText as t } from '../../../localization/config'
import { Field, FieldArray, Form, Formik, getIn } from 'formik';
import {projectCategories} from '../../../utils/utils'
import * as Yup from 'yup';
export default function AddNewProjectModel({ show, toggle, language }) {
  console.log(projectCategories)
  return (
    <CustomModel show={show} toggle={toggle} language={language} title={t('addNewProject', language)}>
      <Formik
        initialValues={{
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
          description:Yup.string().min(2).max(254).required(),
          shortIntro:Yup.string().min(2).max(254).required(),
          projectImage:Yup.string().min(2).max(254).required(),
          compaignDurationEnd:Yup.string().min(2).max(254).required(),
          fundingGoal:Yup.string().min(2).max(254).required(),
          risksAndChallenges:Yup.string().min(2).max(254).required(),
          projectType:Yup.string().min(2).max(254).required(),
          rewardList: Yup.array().of(
            Yup.object().shape({
              title: Yup.string().min(2).max(254).required(),
              amount: Yup.string().min(2).max(254).required(),
              description:Yup.string().min(2).max(254).required(),
            })
          )
        })
        }
        onSubmit={(values, actions) => {
          console.log('from on submit')

          console.log(values)

          // const closeRequest = () => {
          //   actions.resetForm()
          //   toggle()
          // }
          // sendPostRequest('supplier', { ...values }, token, language, closeRequest)
        }}
      >
        {(props) => (
          <CustomModel.Body>
            <Form>
              <InputWithLabel label={t('title', language)} isValid={props.errors.title ? false : true} name={`title`} value={props.values.title} inputHandler={props.handleChange} />
              <InputWithLabel label={t('country', language)} isValid={props.errors.country ? false : true} name={`country`} value={props.values.country} inputHandler={props.handleChange} />
              <SelectList onChange={props.handleChange} name={`category`} isValid={props.errors.category ? false : true} label={t('category', language)}>
              {projectCategories && projectCategories.map((category,index)=><SelectList.Option key={index} value={category}>{t(category,language)}</SelectList.Option>)}
              </SelectList>
              <InputWithLabel label={t('description', language)} isValid={props.errors.description ? false : true} name={`description`} value={props.values.description} inputHandler={props.handleChange} />
              <InputWithLabel label={t('shortIntro', language)} isValid={props.errors.shortIntro ? false : true} name={`shortIntro`} value={props.values.shortIntro} inputHandler={props.handleChange} />
              <InputWithLabel label={t('projectImage', language)} isValid={props.errors.projectImage ? false : true} name={`projectImage`} value={props.values.projectImage} inputHandler={props.handleChange} />
              <InputWithLabel label={t('compaignDurationEnd', language)} isValid={props.errors.compaignDurationEnd ? false : true} name={`compaignDurationEnd`} value={props.values.compaignDurationEnd} inputHandler={props.handleChange} />
              <InputWithLabel label={t('fundingGoal', language)} isValid={props.errors.fundingGoal ? false : true} name={`fundingGoal`} value={props.values.fundingGoal} inputHandler={props.handleChange} />
              <InputWithLabel label={t('risksAndChallenges', language)} isValid={props.errors.risksAndChallenges ? false : true} name={`risksAndChallenges`} value={props.values.risksAndChallenges} inputHandler={props.handleChange} />
              <InputWithLabel label={t('projectType', language)} isValid={props.errors.projectType ? false : true} name={`projectType`} value={props.values.projectType} inputHandler={props.handleChange} />
              {/* <FieldArray name="contacts">
                {(arrayHelpers) => (
                  <ItemGenerator label={t('meansOfCommunication', language)} addButtonHandler={() => arrayHelpers.push({ name: '', value: '' })}>
                    {props.values.contacts && props.values.contacts.length > 0 ? (
                      props.values.contacts.map((contact, index) => {
                        return (
                          <div key={index}>
                            <div className='flex items-center gap-2'>
                              <CustomDropdown mainLabel={t('means', language)} isValid={getIn(props.errors, `contacts[${index}].name`) ? false : true} name={`contacts[${index}].name`} hasData={true} data={['رقم تلفون', 'ايميل', 'واتساب', 'ويشات', 'فيسبوك', 'انستغرام']} handler={(name, value) => props.setFieldValue(name, value)} label={contact.name} />
                              <InputWithLabel label={t('value', language)} isValid={getIn(props.errors, `contacts[${index}].value`) ? false : true} name={`contacts[${index}].value`} value={contact.value} inputHandler={props.handleChange} />
                              <div className='px-1'>
                                <DeleteButton onClick={() => arrayHelpers.remove(index)} />
                              </div>
                            </div>
                          </div>
                        )
                      })
                    ) : (
                      <NoDataFound label={t('noContactInTheList', language)} />
                    )}
                  </ItemGenerator>
                )}
              </FieldArray> */}
              <pre>{JSON.stringify(props.values,null,2)}</pre>
              <CustomModel.Footer>
                <CustomModel.ConfirmButton disable={!props.isValid} onClickHandler={() => { }} >confirm</CustomModel.ConfirmButton>
                <CustomModel.CloseButton  onClickHandler={() => toggle()}>close</CustomModel.CloseButton>
              </CustomModel.Footer>
            </Form>
          </CustomModel.Body>
        )}
      </Formik>
    </CustomModel>
  )
}
