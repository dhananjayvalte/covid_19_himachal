select create_db_user('himachal_pradesh', 'password');

INSERT into organisation (name, db_user, uuid, parent_organisation_id)
values ('himachal_pradesh',
        'himachal_pradesh', '0f2619cc-8884-11ea-bc55-0242ac130003', null);
