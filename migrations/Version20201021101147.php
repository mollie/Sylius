<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201021101147 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE bitbag_mollie_email_template (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) NOT NULL, style TEXT DEFAULT NULL, UNIQUE INDEX UNIQ_835AAD848CDE5729 (type), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_mollie_email_template_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT NOT NULL, name VARCHAR(255) DEFAULT NULL, subject VARCHAR(255) DEFAULT NULL, content TEXT DEFAULT NULL, locale VARCHAR(255) NOT NULL, INDEX IDX_42127E4A2C2AC5D3 (translatable_id), UNIQUE INDEX bitbag_mollie_email_template_translation_uniq_trans (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE bitbag_mollie_email_template_translation ADD CONSTRAINT FK_42127E4A2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES bitbag_mollie_email_template (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sylius_order CHANGE abandoned_email abandonedEmail TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bitbag_mollie_email_template_translation DROP FOREIGN KEY FK_42127E4A2C2AC5D3');
        $this->addSql('DROP TABLE bitbag_mollie_email_template');
        $this->addSql('DROP TABLE bitbag_mollie_email_template_translation');
        $this->addSql('ALTER TABLE sylius_order CHANGE abandonedemail abandoned_email TINYINT(1) NOT NULL');
    }
}
