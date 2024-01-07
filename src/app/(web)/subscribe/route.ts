import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
})

// eslint-disable-next-line import/no-anonymous-default-export
export async function POST(request: Request) {
  const { email, fname } = await request.json()

  if (!email) {
    return Response.json({ error: 'Email is required' }, { status: 400 })
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
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email,
      status: 'subscribed',
      merge_fields,
    })

    return Response.json({ error: '' }, { status: 201 })
  } catch (error: any) {
    return Response.json({ error: error.message || error.toString() }, { status: 500 })
  }
}
