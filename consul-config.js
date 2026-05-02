// ══════════════════════════════════════════════════════════════════════════════
// CONSUL_CONFIG — XII / Orange County
//
// This file is the office-specific configuration for the XII branch.
// Rename this file to consul-config.js and place it alongside index.html
// in the XII GitHub branch. Never edit index.html for office-specific values.
//
// To deploy to a new office: copy this file, update all fields marked ← UPDATE,
// and place the renamed consul-config.js in that office's branch.
// ══════════════════════════════════════════════════════════════════════════════

const CONSUL_CONFIG = {
  brand:            'TWELVE',
  primary_label:    'Orange County',
  tagline:          'XII — BUILDING CULTURE FORWARD',

  sheets_id:        '1Awy-KgfNtf8IBAZf-nY8pmv26n0juNk28IRTfN0usn4',
  oauth_client_id:  '824495442632-o4v639jl9rcsj7dq2fgvfcr6joj98s2c.apps.googleusercontent.com',

  admin_email:          'adam.howle@sunrun.com',
  admin_phone:          '5625371559',
  office_admin_email:   'adam.howle@sunrun.com',
  office_admin_phone:   '5625371559',

  admin_display_name:   'Adam Howle',          // Used in onboarding SMS sign-off
  hr_sms_number:        '(562) 561-2688',       // HR text number for I-9/BG help

  offices:          ['Orange County', 'Newport Beach'],
  compare_offices:  ['Riverside'],

  office_colors: {
    'Orange County': '#F2CF9C',
    'Newport Beach': '#AADDDD',
    'Riverside':     '#FF6200',
  },

  office_meeting_info: {
    'Orange County': { days: 'Monday and Thursday', time: '11:30', address: '8 Whatney, Irvine, CA 92618' },
    'Newport Beach': { days: '', time: '', address: '' },  // ← UPDATE
  },

  // Google Calendar embed URL for the Calendar tab
  calendar_src: 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=Y19hYTdhNGFiZTBhZmM5NjY3OGYyOWI0MGQxYzE4YWI4ZWZiMmQxNGU1M2UxNTc3ZDlmMTQxMTMyNjQwMTNhYzE4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18yMjM2NGFhMzkyOGU0ZmZiZDNlM2U5MTBjNjk3M2E0NmFlZDk5OWJjZjk5NDYzYjk0ZTA2MjA2Y2Y1YWFhNjBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23d50000&color=%23f4511e',

  // Skin accent colors — pure black background, standard cyan brand
  accent: {
    cyan_light:        '#AADDDD',
    cyan_dark:         '#5A9EA0',
    near_black:        '#000000',
    border:            'rgba(170,221,221,0.2)',
    row_hover:         'rgba(170,221,221,0.08)',
    light_cyan_light:  '#AADDDD',
    light_cyan_dark:   '#1D5557',
    light_near_black:  '#F0EDE8',
    light_border:      'rgba(45,102,104,0.22)',
    light_row_hover:   'rgba(45,102,104,0.06)',
  },
};
