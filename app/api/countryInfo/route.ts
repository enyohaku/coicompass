import { NextResponse } from 'next/server';
import { getCountryInfo, updateCountryInfo } from '@/lib/dynamoDbOperations';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');

  if (!country) {
    return NextResponse.json({ error: '国名が指定されていません' }, { status: 400 });
  }

  try {
    const countryInfo = await getCountryInfo(country);
    if (!countryInfo) {
      return NextResponse.json({ error: '国の情報が見つかりません' }, { status: 404 });
    }
    return NextResponse.json(countryInfo);
  } catch (error) {
    console.error('Error in GET /api/countryInfo:', error);
    return NextResponse.json({ error: '国の情報の取得中にエラーが発生しました' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { country, advisoryText } = await request.json();

    if (!country || !advisoryText) {
      return NextResponse.json({ error: '国名と注意情報は必須です' }, { status: 400 });
    }

    await updateCountryInfo(country, advisoryText);
    return NextResponse.json({ message: '国の情報が正常に更新されました' }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/countryInfo:', error);
    return NextResponse.json({ error: '国の情報の更新中にエラーが発生しました' }, { status: 500 });
  }
}