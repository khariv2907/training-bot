import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedExercisesWithGroups1760990667456 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert exercise groups
    const groups = [
      { id: 1, uk: "Ноги", en: "Legs" },
      { id: 2, uk: "Груди", en: "Chest" },
      { id: 3, uk: "Спина", en: "Back" },
      { id: 4, uk: "Плечі", en: "Shoulders" },
      { id: 5, uk: "Руки", en: "Arms" },
      { id: 6, uk: "Кор/Кардіо", en: "Core & Cardio" },
    ];

    for (const group of groups) {
      await queryRunner.query(`INSERT INTO exercise_groups (id) VALUES (?)`, [group.id]);
      await queryRunner.query(`
        INSERT INTO exercise_group_translations (exercise_group_id, language, name) VALUES
          (?, 'uk', ?),
          (?, 'en', ?)
      `, [group.id, group.uk, group.id, group.en]);
    }

    // Exercises mapped to groups
    const exercises = [
      { groupId: 1, en: "Leg extension", uk: "Розгинання ніг на тренажері (Leg extension)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 1, en: "Prone leg curl", uk: "Згинання ніг лежачи на тренажері (Prone leg curl)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 1, en: "Leg press", uk: "Жим ногами (Leg press)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 1, en: "Abductor", uk: "Відведення ніг (Abductor)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 1, en: "Adductor", uk: "Зведення ніг (Adductor)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 1, en: "Calf", uk: "Підйом на ікри (Calf)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },

      { groupId: 2, en: "Chest press", uk: "Жим грудьми (Chest press)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 2, en: "Pectoral", uk: "Пектораль (Pectoral)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 2, en: "Barbell bench press", uk: "Жим штанги лежачи", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 2, en: "Incline barbell press", uk: "Жим штанги під кутом вгору", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 2, en: "Decline barbell press", uk: "Жим штанги під кутом вниз", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true } },

      { groupId: 3, en: "Vertical traction", uk: "Вертикальна тяга (Vertical traction)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 3, en: "Low row", uk: "Горизонтальна тяга (Low row)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 3, en: "Lower back", uk: "Тренажер для спини (Lower back)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 3, en: "Hyperextension", uk: "Гіперекстензія", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true } },

      { groupId: 4, en: "Shoulder press", uk: "Жим на плечі (Shoulder press)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 4, en: "Dumbbell lateral raise", uk: "Гантелі на середні плечі", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 4, en: "Dumbbell rear delt raise", uk: "Гантелі на задні плечі", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 4, en: "Dumbbell front raise", uk: "Гантелі на передні плечі", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 4, en: "Military press", uk: "Армійський жим лежачи", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true } },

      { groupId: 5, en: "Arm curl", uk: "Згинання рук на тренажері (Arm curl)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 5, en: "Arm extension", uk: "Розгинання рук на тренажері (Arm extension)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 5, en: "Hammer curl", uk: "Молоток на біцепс", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 5, en: "Close grip dumbbell press", uk: "Жим гантелі вузьким хватом", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 5, en: "Dumbbell tricep press", uk: "Жим гантелей на трицепс", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 5, en: "EZ bar bicep curl", uk: "Із кривої штанги на біцепс", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true } },

      { groupId: 6, en: "Total abdominal", uk: "Прес на тренажері (Total abdominal)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 6, en: "Multi hip", uk: "Мультигруповий тренажер (Multi hip)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true, isBilateral: true } },
      { groupId: 6, en: "Treadmill walking", uk: "Ходьба на біговій доріжці", traits: { isTimeBased: true, isDistanceBased: true } },
      { groupId: 6, en: "Stepper", uk: "Степпер", traits: { isTimeBased: true } },
      { groupId: 6, en: "Seated dip", uk: "Жим вниз сидячи (Seated dip)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 6, en: "Pull down", uk: "Тяга зверху (Pull down)", traits: { isMachineBased: true, isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
      { groupId: 6, en: "Hip thrust", uk: "Підйом тазу (Hip thrust)", traits: { isSetsBased: true, isRepsBased: true, isWeightLoad: true } },
    ];

    for (const [index, ex] of exercises.entries()) {
      const id = index + 1;
      await queryRunner.query(
        `INSERT INTO exercises (id, group_id, traits) VALUES (?, ?, ?)`,
        [id, ex.groupId, JSON.stringify(ex.traits)]
      );

      await queryRunner.query(
        `INSERT INTO exercise_translations (exercise_id, language, name) VALUES
          (?, 'en', ?),
          (?, 'uk', ?)`,
        [id, ex.en, id, ex.uk]
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM exercise_translations`);
    await queryRunner.query(`DELETE FROM exercises`);
    await queryRunner.query(`DELETE FROM exercise_group_translations`);
    await queryRunner.query(`DELETE FROM exercise_groups`);
  }
}
