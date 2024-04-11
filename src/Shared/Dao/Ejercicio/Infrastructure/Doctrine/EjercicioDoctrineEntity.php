<?php

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="ejercicios")
 */
class EjercicioDoctrineEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="guid")
     * @ORM\GeneratedValue(strategy="UUID")
     */
    protected readonly string $id;

    /**
     * @ORM\Column(type="string")
     */
    protected string $name;

    /**
     * @ORM\Column(type="text")
     */
    protected string $description;

    /**
     * @ORM\Column(type="string")
     */
    protected string $difficulty;

    /**
     * @ORM\Column(type="string")
     */
    protected string $type;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected string $image;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected string $video;

    /**
     * Constructor
     * 
     * @param string $name
     */
    public function __construct(
        string $id,
        string $name,
        string $description,
        ?string $difficulty = null,
        ?string $type = null,
        ?string $image = null,
        ?string $video = null
    ) {
        $this->id = $id;
        $this->name = $name;
        $this->type = $type;
        $this->description = $description;
        $this->difficulty = $difficulty;
        $this->image = $image;
        $this->video = $video;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getDifficulty()
    {
        return $this->difficulty;
    }

    public function getType()
    {
        return $this->type;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function getVideo()
    {
        return $this->video;
    }
}
