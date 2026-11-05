import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COMMISSIONS,
  calculateQuizResult,
  GOOGLE_FORM_URL,
  WORKFLOW_STEPS,
} from './commissions';

test('COMMISSIONS contains all 4 required commissions with correct functions', () => {
  assert.equal(COMMISSIONS.length, 4);

  const ids = COMMISSIONS.map((c) => c.id);
  assert.deepEqual(ids, ['logistica', 'academica', 'protocolo', 'difusion']);

  const logistica = COMMISSIONS.find((c) => c.id === 'logistica');
  assert.equal(logistica?.officialFunction, 'Gestiona el espacio físico y recursos.');

  const academica = COMMISSIONS.find((c) => c.id === 'academica');
  assert.equal(academica?.officialFunction, 'Diseña el contenido del evento.');

  const protocolo = COMMISSIONS.find((c) => c.id === 'protocolo');
  assert.equal(protocolo?.officialFunction, 'Dirige el evento y atiende a invitados.');

  const difusion = COMMISSIONS.find((c) => c.id === 'difusion');
  assert.equal(difusion?.officialFunction, 'Promueve la convocatoria.');
});

test('Each commission contains a note about working under representative leadership', () => {
  COMMISSIONS.forEach((c) => {
    assert.match(c.representativeNote, /representante/i);
  });
});

test('calculateQuizResult computes the majority commission correctly', () => {
  // Test case 1: all answers for academica
  const resAcademica = calculateQuizResult({
    1: 'academica',
    2: 'academica',
    3: 'academica',
  });
  assert.equal(resAcademica.id, 'academica');

  // Test case 2: majority for difusion
  const resDifusion = calculateQuizResult({
    1: 'difusion',
    2: 'logistica',
    3: 'difusion',
  });
  assert.equal(resDifusion.id, 'difusion');

  // Test case 3: majority for protocolo
  const resProtocolo = calculateQuizResult({
    1: 'protocolo',
    2: 'protocolo',
    3: 'academica',
  });
  assert.equal(resProtocolo.id, 'protocolo');
});

test('Workflow steps correctly document the 3 phases and Prof. Juan Carlos Suárez reference', () => {
  assert.equal(WORKFLOW_STEPS.length, 3);
  assert.equal(WORKFLOW_STEPS[0].stepNumber, '01');
  assert.equal(WORKFLOW_STEPS[1].stepNumber, '02');
  assert.equal(WORKFLOW_STEPS[2].stepNumber, '03');

  // Step 3 must mention Prof. Juan Carlos Suárez
  const step3 = WORKFLOW_STEPS[2];
  assert.match(step3.fullDesc, /Prof\. Juan Carlos Suárez/);
  assert.match(step3.highlightNote ?? '', /Prof\. Juan Carlos Suárez/);
});

test('GOOGLE_FORM_URL is valid Google Docs form link', () => {
  assert.ok(GOOGLE_FORM_URL.startsWith('https://docs.google.com/forms/'));
});
