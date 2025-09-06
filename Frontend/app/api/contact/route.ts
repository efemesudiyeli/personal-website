import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar gereklidir' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir email adresi giriniz' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email servisi yapılandırılmamış' },
        { status: 500 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@efemesudiyeli.dev>',
      to: ['efemesudiyeli@gmail.com'],
      subject: `Portfolio İletişim: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Yeni İletişim Mesajı</h1>
          </div>
          
          <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #374151; margin-top: 0; margin-bottom: 20px; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                📋 Gönderen Bilgileri
              </h3>
              <p style="margin: 8px 0; color: #4b5563;"><strong>👤 İsim:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #4b5563;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 8px 0; color: #4b5563;"><strong>📝 Konu:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #374151; margin-top: 0; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                💬 Mesaj
              </h3>
              <p style="line-height: 1.6; color: #4b5563; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; font-size: 14px; color: #6b7280; text-align: center;">
              <p style="margin: 5px 0;">📅 Gönderim tarihi: ${new Date().toLocaleString('tr-TR')}</p>
              <p style="margin: 5px 0;">🌐 Bu mesaj portfolio web sitesinden gönderilmiştir</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email
    })

    if (error) {
      return NextResponse.json(
        { error: 'Email gönderilemedi' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Mesaj başarıyla gönderildi! En kısa sürede size dönüş yapacağım.',
        emailId: data?.id
      },
      { status: 200 }
    )

  } catch {
    return NextResponse.json(
      { error: 'Sunucu hatası oluştu' },
      { status: 500 }
    )
  }
}
