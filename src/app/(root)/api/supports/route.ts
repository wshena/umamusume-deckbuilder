import { NextResponse } from 'next/server';
import supportCardsData from '@/data/umamusume_support_cards.json';

export async function GET() {
  try {
    // Langsung return data yang sudah di-import
    return NextResponse.json({
      success: true,
      data: supportCardsData,
    });
    
  } catch (error) {
    console.error('Error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to load data'
    }, { 
      status: 500 
    });
  }
}