import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
})

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { email, fname } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  let merge_fields
  if (fname === undefined || fname?.length === 0) {
    merge_fields = undefined
  } else {
    merge_fields = {
      FNAME: fname,
    }
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields,
    })

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
